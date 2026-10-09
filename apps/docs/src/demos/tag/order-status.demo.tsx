import { Tag, Table } from '@jcdecor/ui';

const orders = [
  { id: '#10482', product: 'Piso vinílico Carvalho Natural · 12 m²', status: <Tag tone="success" variant="dot">Entregue</Tag> },
  { id: '#10483', product: 'Papel de parede Linho Bege · 4 rolos', status: <Tag tone="primary" variant="dot">Em transporte</Tag> },
  { id: '#10484', product: 'Painel ripado Freijó · 6 peças', status: <Tag tone="warn" variant="dot">Aguardando pagamento</Tag> },
  { id: '#10485', product: 'Grama sintética 25 mm · 20 m²', status: <Tag tone="error" variant="dot">Cancelado</Tag> },
];

export default function Demo() {
  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Pedido</Table.Th>
          <Table.Th>Produto</Table.Th>
          <Table.Th>Status</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {orders.map((order) => (
          <Table.Tr key={order.id}>
            <Table.Td>{order.id}</Table.Td>
            <Table.Td>{order.product}</Table.Td>
            <Table.Td>{order.status}</Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
}
