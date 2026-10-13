import { useState } from 'react';
import { Box, DataTable, SegmentedControl, type TableColumn } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { withoutPadding: true };

interface Vaga {
  id: number;
  cargo: string;
  area: string;
}

const columns: TableColumn<Vaga>[] = [
  { label: 'Cargo', key: 'cargo' },
  { label: 'Área', key: 'area' },
];

export default function Demo() {
  const [state, setState] = useState('loading');

  return (
    <>
      <Box px={28} py="md">
        <SegmentedControl
          value={state}
          onChange={setState}
          data={[
            { value: 'loading', label: 'Carregando' },
            { value: 'empty', label: 'Vazio' },
            { value: 'custom', label: 'Vazio personalizado' },
          ]}
        />
      </Box>
      <DataTable
        aria-label="Vagas abertas"
        columns={columns}
        rows={[]}
        loading={state === 'loading'}
        emptyModule="people"
        emptyTitle={state === 'custom' ? 'Nenhuma vaga aberta' : undefined}
        emptyDescription={state === 'custom' ? 'Quando um gestor solicitar uma contratação, ela aparece aqui.' : undefined}
      />
    </>
  );
}
