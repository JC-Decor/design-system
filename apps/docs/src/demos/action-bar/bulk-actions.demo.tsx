import { useState } from 'react';
import { ActionBar, Badge, Button, Checkbox, Table, Text } from '@jcdecor/ui';
import { IconFileExport, IconPrinter, IconTrash, IconTruck } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = {};

const orders = [
  { id: '10481', customer: 'Ana Ribeiro', total: 'R$ 2.870,00', status: 'Pago' },
  { id: '10480', customer: 'Bruno Carvalho', total: 'R$ 459,90', status: 'Pago' },
  { id: '10479', customer: 'Camila Duarte', total: 'R$ 1.249,00', status: 'Aguardando' },
  { id: '10478', customer: 'Diego Martins', total: 'R$ 189,90', status: 'Pago' },
];

export default function Demo() {
  const [selected, setSelected] = useState<string[]>([]);
  const allSelected = selected.length === orders.length;

  const toggle = (id: string) => setSelected((current) => (current.includes(id) ? current.filter((value) => value !== id) : [...current, id]));

  return (
    <>
      <Table highlightOnHover verticalSpacing="sm">
        <Table.Thead>
          <Table.Tr>
            <Table.Th w={40}>
              <Checkbox
                aria-label="Selecionar todos"
                checked={allSelected}
                indeterminate={selected.length > 0 && !allSelected}
                onChange={() => setSelected(allSelected ? [] : orders.map((order) => order.id))}
              />
            </Table.Th>
            <Table.Th>Pedido</Table.Th>
            <Table.Th>Cliente</Table.Th>
            <Table.Th>Total</Table.Th>
            <Table.Th>Status</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {orders.map((order) => (
            <Table.Tr key={order.id} bg={selected.includes(order.id) ? 'var(--ds-primary-soft)' : undefined}>
              <Table.Td>
                <Checkbox aria-label={`Selecionar pedido ${order.id}`} checked={selected.includes(order.id)} onChange={() => toggle(order.id)} />
              </Table.Td>
              <Table.Td fw={600}>#{order.id}</Table.Td>
              <Table.Td>{order.customer}</Table.Td>
              <Table.Td>{order.total}</Table.Td>
              <Table.Td>
                <Badge color={order.status === 'Pago' ? 'evergreen' : 'electric'}>{order.status}</Badge>
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>

      <ActionBar opened={selected.length > 0} onClose={() => setSelected([])} closeOnEscape aria-label="Ações em massa dos pedidos">
        <Text fz="sm" fw={600} px="xs">
          {selected.length} {selected.length === 1 ? 'pedido selecionado' : 'pedidos selecionados'}
        </Text>
        <ActionBar.Divider />
        <Button size="sm" variant="subtle" leftSection={<IconTruck size={16} />}>
          Marcar como enviado
        </Button>
        <Button size="sm" variant="subtle" leftSection={<IconPrinter size={16} />}>
          Etiquetas
        </Button>
        <Button size="sm" variant="subtle" leftSection={<IconFileExport size={16} />}>
          Exportar
        </Button>
        <Button size="sm" variant="subtle" color="danger" leftSection={<IconTrash size={16} />}>
          Cancelar pedidos
        </Button>
        <ActionBar.Divider />
        <ActionBar.CloseButton aria-label="Limpar seleção" />
      </ActionBar>
    </>
  );
}
