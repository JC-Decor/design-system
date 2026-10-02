import { useState } from 'react';
import { CheckIcon, Combobox, Group, Pill, PillsInput, useCombobox } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

const categorias = ['Pisos vinílicos', 'Papel de parede', 'Painéis ripados', 'Grama sintética', 'Cortinas', 'Tatames', 'Carpetes'];

export default function Demo() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
    onDropdownOpen: () => combobox.updateSelectedOptionIndex('active'),
  });
  const [search, setSearch] = useState('');
  const [value, setValue] = useState<string[]>(['Cortinas']);

  const toggle = (item: string) =>
    setValue((current) => (current.includes(item) ? current.filter((v) => v !== item) : [...current, item]));

  const options = categorias
    .filter((item) => item.toLowerCase().includes(search.trim().toLowerCase()))
    .map((item) => (
      <Combobox.Option value={item} key={item} active={value.includes(item)}>
        <Group gap="sm">
          {value.includes(item) ? <CheckIcon size={12} /> : null}
          <span>{item}</span>
        </Group>
      </Combobox.Option>
    ));

  return (
    <Combobox store={combobox} onOptionSubmit={toggle}>
      <Combobox.DropdownTarget>
        <PillsInput label="Categorias do pedido" onClick={() => combobox.openDropdown()}>
          <Pill.Group>
            {value.map((item) => (
              <Pill key={item} withRemoveButton onRemove={() => toggle(item)}>
                {item}
              </Pill>
            ))}
            <Combobox.EventsTarget>
              <PillsInput.Field
                value={search}
                placeholder="Buscar categoria"
                onFocus={() => combobox.openDropdown()}
                onBlur={() => combobox.closeDropdown()}
                onChange={(event) => {
                  combobox.updateSelectedOptionIndex();
                  setSearch(event.currentTarget.value);
                }}
                onKeyDown={(event) => {
                  if (event.key === 'Backspace' && search.length === 0 && value.length > 0) {
                    event.preventDefault();
                    toggle(value[value.length - 1]);
                  }
                }}
              />
            </Combobox.EventsTarget>
          </Pill.Group>
        </PillsInput>
      </Combobox.DropdownTarget>

      <Combobox.Dropdown>
        <Combobox.Options>
          {options.length > 0 ? options : <Combobox.Empty>Nenhuma categoria encontrada</Combobox.Empty>}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
