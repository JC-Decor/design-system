import { useState } from 'react';
import { Anchor, Combobox, TextInput, useCombobox } from '@jcdecor/ui';
import { IconSearch } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

const recentes = ['Piso vinílico carvalho', 'Papel de parede listrado', 'Cortina blackout cinza'];
const populares = ['Painel ripado', 'Grama sintética', 'Tatame infantil'];

export default function Demo() {
  const combobox = useCombobox();
  const [value, setValue] = useState('');

  return (
    <Combobox
      store={combobox}
      onOptionSubmit={(val) => {
        setValue(val);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <TextInput
          label="Buscar produtos"
          placeholder="Ex.: piso para cozinha"
          leftSection={<IconSearch size={18} />}
          value={value}
          onChange={(event) => setValue(event.currentTarget.value)}
          onClick={() => combobox.openDropdown()}
          onFocus={() => combobox.openDropdown()}
          onBlur={() => combobox.closeDropdown()}
        />
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Header>Sugestões para você</Combobox.Header>
        <Combobox.Options>
          <Combobox.Group label="Buscas recentes">
            {recentes.map((item) => (
              <Combobox.Option value={item} key={item}>
                {item}
              </Combobox.Option>
            ))}
          </Combobox.Group>
          <Combobox.Group label="Mais buscados">
            {populares.map((item) => (
              <Combobox.Option value={item} key={item}>
                {item}
              </Combobox.Option>
            ))}
          </Combobox.Group>
        </Combobox.Options>
        <Combobox.Footer>
          <Anchor fz="sm" href="#" onClick={(event) => event.preventDefault()}>
            Ver todas as categorias
          </Anchor>
        </Combobox.Footer>
      </Combobox.Dropdown>
    </Combobox>
  );
}
