import { useState } from 'react';
import { Combobox, Group, Text, TextInput, useCombobox } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 380 };

const horarios = ['07:00', '07:30', '08:00', '08:30', '09:00', '09:30', '10:00', '13:00', '14:00'];

export default function Demo() {
  const [value, setValue] = useState('');
  const combobox = useCombobox({
    onDropdownOpen: () => combobox.selectFirstOption(),
  });

  const filtered = horarios.filter((item) => item.startsWith(value.trim()));

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
            label="Entrada do turno"
            description="Use as setas ↑ ↓ e Enter para escolher"
            placeholder="Ex.: 08:00"
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
