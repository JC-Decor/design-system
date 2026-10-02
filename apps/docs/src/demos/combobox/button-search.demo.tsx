import { useState } from 'react';
import { Button, Combobox, Text, useCombobox } from '@jcdecor/ui';
import { IconChevronDown } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

const cidades = ['São Paulo', 'Campinas', 'Santos', 'Rio de Janeiro', 'Niterói', 'Belo Horizonte', 'Curitiba', 'Porto Alegre'];

export default function Demo() {
  const [cidade, setCidade] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const combobox = useCombobox({
    onDropdownClose: () => {
      combobox.resetSelectedOption();
      combobox.focusTarget();
      setSearch('');
    },
    onDropdownOpen: () => combobox.focusSearchInput(),
  });

  const options = cidades
    .filter((item) => item.toLowerCase().includes(search.toLowerCase().trim()))
    .map((item) => (
      <Combobox.Option value={item} key={item} active={item === cidade}>
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
          setCidade(val);
          combobox.closeDropdown();
        }}
      >
        <Combobox.Target withAriaAttributes={false}>
          <Button variant="outline" rightSection={<IconChevronDown size={16} />} onClick={() => combobox.toggleDropdown()}>
            {cidade ?? 'Escolher cidade'}
          </Button>
        </Combobox.Target>

        <Combobox.Dropdown>
          <Combobox.Search value={search} onChange={(event) => setSearch(event.currentTarget.value)} placeholder="Buscar cidade" />
          <Combobox.Options>
            {options.length > 0 ? options : <Combobox.Empty>Nenhuma cidade encontrada</Combobox.Empty>}
          </Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>

      <Text fz="sm" c="var(--ds-text-2)" mt="sm" ta="center">
        Frete calculado para: {cidade ?? '—'}
      </Text>
    </>
  );
}
