import { useState } from 'react';
import { DataTable, Text, Stack, type DataTableColumn } from '@jcdecor/ui';

interface Order {
  id: string;
  customer: string;
  total: number;
}

const data: Order[] = [
  { id: '#10482', customer: 'Mariana Souza', total: 1078.8 },
  { id: '#10483', customer: 'Rafael Lima', total: 519.6 },
  { id: '#10484', customer: 'Juliana Alves', total: 1499.4 },
];

const columns: DataTableColumn<Order>[] = [
  { key: 'id', header: 'Pedido' },
  { key: 'customer', header: 'Cliente' },
  { key: 'total', header: 'Total', numeric: true, format: { style: 'currency', currency: 'BRL' } },
];

export default function Demo() {
  const [selected, setSelected] = useState<Order | null>(null);

  return (
    <Stack gap="sm">
      <DataTable columns={columns} data={data} rowKey={(row) => row.id} onRowClick={setSelected} />
      <Text fz="sm" c="var(--ds-text-2)">
        {selected ? `Abrindo pedido ${selected.id} de ${selected.customer}…` : 'Clique em uma linha para abrir o pedido.'}
      </Text>
    </Stack>
  );
}
