import { Table } from '@jcdecor/ui';

const rows = [
  { keyword: 'piso vinilico autocolante', acessos: '505', impressoes: '127.237', posicao: '6,6' },
  { keyword: 'grama sintetica', acessos: '143', impressoes: '31.908', posicao: '7,7' },
  { keyword: 'painel ripado', acessos: '86', impressoes: '27.945', posicao: '10,4' },
];

export default function Demo() {
  return (
    <Table tabularNums>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Palavra-chave</Table.Th>
          <Table.Th ta="right">Acessos</Table.Th>
          <Table.Th ta="right">Impressões</Table.Th>
          <Table.Th ta="right">Posição</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {rows.map((row) => (
          <Table.Tr key={row.keyword}>
            <Table.Td>{row.keyword}</Table.Td>
            <Table.Td ta="right">{row.acessos}</Table.Td>
            <Table.Td ta="right">{row.impressoes}</Table.Td>
            <Table.Td ta="right">{row.posicao}</Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
}
