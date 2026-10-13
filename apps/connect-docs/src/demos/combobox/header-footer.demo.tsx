import { useState } from 'react';
import { Anchor, Combobox, Icon, TextInput, useCombobox } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

const recentes = ['Marina Souza', 'Saldo de férias da equipe', 'Política de home office'];
const populares = ['Holerite de setembro', 'Calendário de feriados', 'Plano de saúde'];

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
          label="Buscar no painel"
          placeholder="Ex.: banco de horas"
          leftSection={<Icon name="search" size={16} />}
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
            Ver busca avançada
          </Anchor>
        </Combobox.Footer>
      </Combobox.Dropdown>
    </Combobox>
  );
}
