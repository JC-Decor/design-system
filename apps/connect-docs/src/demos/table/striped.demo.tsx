import { Table } from '@jcdecor/connect-ui';

const treinamentos = [
  { codigo: 'TR-SEG-01', nome: 'Segurança da informação', carga: 2, inscritos: 1184, prazo: '30/10' },
  { codigo: 'TR-NR-35', nome: 'NR-35 · Trabalho em altura', carga: 8, inscritos: 146, prazo: '15/11' },
  { codigo: 'TR-LID-02', nome: 'Liderança e feedback', carga: 12, inscritos: 88, prazo: '30/11' },
  { codigo: 'TR-LGPD-01', nome: 'LGPD no dia a dia', carga: 1, inscritos: 1271, prazo: '30/10' },
  { codigo: 'TR-COM-04', nome: 'Comunicação não violenta', carga: 4, inscritos: 203, prazo: '12/12' },
];

export default function Demo() {
  return (
    <Table.ScrollContainer minWidth={560}>
      <Table striped withTableBorder withColumnBorders tabularNums>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Código</Table.Th>
            <Table.Th>Treinamento</Table.Th>
            <Table.Th ta="right">Carga (h)</Table.Th>
            <Table.Th ta="right">Inscritos</Table.Th>
            <Table.Th ta="right">Prazo</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {treinamentos.map((t) => (
            <Table.Tr key={t.codigo}>
              <Table.Td ff="monospace" fz="xs">
                {t.codigo}
              </Table.Td>
              <Table.Td>{t.nome}</Table.Td>
              <Table.Td ta="right">{t.carga}</Table.Td>
              <Table.Td ta="right">{t.inscritos.toLocaleString('pt-BR')}</Table.Td>
              <Table.Td ta="right">{t.prazo}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
