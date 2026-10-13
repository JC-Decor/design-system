import { useState } from 'react';
import { Button, Icon, PageToolbar, Text } from '@jcdecor/connect-ui';

export default function Demo() {
  const [chip, setChip] = useState('todas');
  const [busca, setBusca] = useState('');

  return (
    <>
      <PageToolbar
        chips={[
          { key: 'todas', label: 'Todas', count: 64 },
          { key: 'pendentes', label: 'Pendentes', tone: 'yellow', count: 9 },
          { key: 'aprovadas', label: 'Aprovadas', tone: 'green', count: 48 },
          { key: 'recusadas', label: 'Recusadas', tone: 'coral', count: 7 },
        ]}
        activeChip={chip}
        onChipClick={setChip}
        searchValue={busca}
        onSearchChange={setBusca}
        searchPlaceholder="Buscar solicitação..."
        actions={<Button leftSection={<Icon name="plus" size={15} />}>Nova solicitação</Button>}
      />
      <Text fz="sm" c="var(--ds-text-3)">
        Filtro: {chip}
        {busca && ` · busca: “${busca}”`}
      </Text>
    </>
  );
}
