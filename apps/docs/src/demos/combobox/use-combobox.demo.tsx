import { useState } from 'react';
import { Combobox, Group, Text, TextInput, useCombobox } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 380 };

const medidas = ['1,00 m', '1,40 m', '1,80 m', '2,00 m', '2,20 m', '2,60 m', '2,80 m', '3,00 m'];

export default function Demo() {
  const [value, setValue] = useState('');
  const combobox = useCombobox({
    onDropdownOpen: () => combobox.selectFirstOption(),
  });

  const filtered = medidas.filter((item) => item.startsWith(value.trim()));

  return (
    <>
      <Combobox
        store={combobox}
        onOptionSubmit={(val) => {
          setValue(val);
          combobox.closeDropdown();
        }}
      >
        <Combobox.Target>
          <TextInput
            label="Largura da cortina"
            description="Use as setas ↑ ↓ e Enter para escolher"
            placeholder="Ex.: 2,00 m"
            value={value}
            onChange={(event) => {
              setValue(event.currentTarget.value);
              combobox.openDropdown();
              combobox.updateSelectedOptionIndex();
            }}
            onClick={() => combobox.openDropdown()}
            onFocus={() => combobox.openDropdown()}
            onBlur={() => combobox.closeDropdown()}
          />
        </Combobox.Target>
        <Combobox.Dropdown hidden={filtered.length === 0}>
          <Combobox.Options>
            {filtered.map((item) => (
              <Combobox.Option value={item} key={item}>
                {item}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
      <Group gap="xs" mt="sm">
        <Text fz="xs" c="var(--ds-text-3)">
          Aberto: {combobox.dropdownOpened ? 'sim' : 'não'}
        </Text>
      </Group>
    </>
  );
}
