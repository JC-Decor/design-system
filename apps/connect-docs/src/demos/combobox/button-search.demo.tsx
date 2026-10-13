import { useState } from 'react';
import { Button, Combobox, Icon, Text, useCombobox } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

const equipes = ['Pessoas & Cultura', 'Departamento Pessoal', 'Tecnologia', 'Financeiro', 'Comercial', 'Jurídico', 'Operações', 'Marketing'];

export default function Demo() {
  const [equipe, setEquipe] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const combobox = useCombobox({
    onDropdownClose: () => {
      combobox.resetSelectedOption();
      combobox.focusTarget();
      setSearch('');
    },
    onDropdownOpen: () => combobox.focusSearchInput(),
  });

  const options = equipes
    .filter((item) => item.toLowerCase().includes(search.toLowerCase().trim()))
    .map((item) => (
      <Combobox.Option value={item} key={item} active={item === equipe}>
        {item}
      </Combobox.Option>
    ));

  return (
    <>
      <Combobox
        store={combobox}
        width={260}
        position="bottom-start"
        onOptionSubmit={(val) => {
          setEquipe(val);
          combobox.closeDropdown();
        }}
      >
        <Combobox.Target withAriaAttributes={false}>
          <Button variant="outline" rightSection={<Icon name="chev" size={15} />} onClick={() => combobox.toggleDropdown()}>
            {equipe ?? 'Escolher equipe'}
          </Button>
        </Combobox.Target>

        <Combobox.Dropdown>
          <Combobox.Search value={search} onChange={(event) => setSearch(event.currentTarget.value)} placeholder="Buscar equipe" />
          <Combobox.Options>
            {options.length > 0 ? options : <Combobox.Empty>Nenhuma equipe encontrada</Combobox.Empty>}
          </Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>

      <Text fz="sm" c="var(--ds-text-2)" mt="sm" ta="center">
        Escala exibida para: {equipe ?? 'todas as equipes'}
      </Text>
    </>
  );
}
