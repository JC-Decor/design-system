import { ActionIcon, Avatar, Badge, Group, Menu, Table, Text } from '@jcdecor/ui';
import { IconDots, IconEye, IconPrinter, IconX } from '@tabler/icons-react';

const pedidos = [
  { id: '#10482', cliente: 'Ana Ribeiro', data: '02/10/2026', total: 'R$ 1.249,90', status: 'Pago', color: 'evergreen' },
  { id: '#10481', cliente: 'Bruno Carvalho', data: '01/10/2026', total: 'R$ 389,70', status: 'Em separação', color: 'horizon' },
  { id: '#10479', cliente: 'Carla Mendes', data: '30/09/2026', total: 'R$ 2.870,00', status: 'Aguardando', color: 'electric' },
  { id: '#10475', cliente: 'Diego Santos', data: '28/09/2026', total: 'R$ 156,40', status: 'Cancelado', color: 'danger' },
];

export default function Demo() {
  return (
    <Table.ScrollContainer minWidth={640}>
      <Table tabularNums>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Pedido</Table.Th>
            <Table.Th>Cliente</Table.Th>
            <Table.Th>Data</Table.Th>
            <Table.Th>Status</Table.Th>
            <Table.Th ta="right">Total</Table.Th>
            <Table.Th w={48} />
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {pedidos.map((p) => (
            <Table.Tr key={p.id}>
              <Table.Td fw={600}>{p.id}</Table.Td>
              <Table.Td>
                <Group gap="sm" wrap="nowrap">
                  <Avatar name={p.cliente} size="sm" />
                  <Text fz="sm">{p.cliente}</Text>
                </Group>
              </Table.Td>
              <Table.Td c="var(--ds-text-3)">{p.data}</Table.Td>
              <Table.Td>
                <Badge color={p.color}>{p.status}</Badge>
              </Table.Td>
              <Table.Td ta="right" fw={600}>
                {p.total}
              </Table.Td>
              <Table.Td>
                <Menu position="bottom-end">
                  <Menu.Target>
                    <ActionIcon aria-label={`Ações do pedido ${p.id}`}>
                      <IconDots size={16} />
                    </ActionIcon>
                  </Menu.Target>
                  <Menu.Dropdown>
                    <Menu.Item leftSection={<IconEye size={14} />}>Ver detalhes</Menu.Item>
                    <Menu.Item leftSection={<IconPrinter size={14} />}>Imprimir etiqueta</Menu.Item>
                    <Menu.Item color="danger" leftSection={<IconX size={14} />}>
                      Cancelar pedido
                    </Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
