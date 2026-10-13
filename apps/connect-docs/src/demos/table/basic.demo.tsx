import { Table } from '@jcdecor/connect-ui';

const areas = [
  { area: 'Comercial', headcount: 312, admissoes: 18, turnover: '2,1%' },
  { area: 'Logística', headcount: 486, admissoes: 27, turnover: '3,4%' },
  { area: 'Tecnologia', headcount: 94, admissoes: 6, turnover: '1,2%' },
];

export default function Demo() {
  return (
    <Table tabularNums>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Área</Table.Th>
          <Table.Th ta="right">Headcount</Table.Th>
          <Table.Th ta="right">Admissões no trimestre</Table.Th>
          <Table.Th ta="right">Turnover</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {areas.map((row) => (
          <Table.Tr key={row.area}>
            <Table.Td>{row.area}</Table.Td>
            <Table.Td ta="right">{row.headcount}</Table.Td>
            <Table.Td ta="right">{row.admissoes}</Table.Td>
            <Table.Td ta="right">{row.turnover}</Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
}
