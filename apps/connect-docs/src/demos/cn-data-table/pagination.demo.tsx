import { useState } from 'react';
import { Box, DataTable, TablePagination, type TableColumn } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { withoutPadding: true };

interface Treinamento {
  id: number;
  nome: string;
  carga: string;
}

const all: Treinamento[] = Array.from({ length: 48 }, (_, i) => ({
  id: i + 1,
  nome: `Treinamento ${String(i + 1).padStart(2, '0')} — ${['Integração', 'Segurança do trabalho', 'Atendimento', 'Liderança'][i % 4]}`,
  carga: `${(i % 4) + 1}h`,
}));

const columns: TableColumn<Treinamento>[] = [
  { label: 'Treinamento', key: 'nome' },
  { label: 'Carga horária', key: 'carga', align: 'right' },
];

const PAGE_SIZE = 5;

export default function Demo() {
  const [page, setPage] = useState(1);
  const rows = all.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <>
      <DataTable aria-label="Treinamentos" columns={columns} rows={rows} getRowId={(r) => r.id} dense />
      <Box px={28} pb="sm">
        <TablePagination total={all.length} page={page} pageSize={PAGE_SIZE} onPageChange={setPage} />
      </Box>
    </>
  );
}
