import { Table } from '@jcdecor/ui';

const produtos = [
  { sku: 'PV-CARV-05', nome: 'Piso vinílico Carvalho Natural', estoque: 412, preco: 'R$ 89,90' },
  { sku: 'PP-FOLH-10', nome: 'Papel de parede Folhagem Verde', estoque: 96, preco: 'R$ 129,90' },
  { sku: 'PR-FREI-27', nome: 'Painel ripado Freijó 2,70m', estoque: 38, preco: 'R$ 349,00' },
  { sku: 'GS-PREM-25', nome: 'Grama sintética Premium 25mm', estoque: 1240, preco: 'R$ 54,90' },
  { sku: 'CT-LINH-28', nome: 'Cortina Linho Cru 2,80m', estoque: 61, preco: 'R$ 279,90' },
];

export default function Demo() {
  return (
    <Table.ScrollContainer minWidth={560}>
      <Table striped withTableBorder withColumnBorders tabularNums>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>SKU</Table.Th>
            <Table.Th>Produto</Table.Th>
            <Table.Th ta="right">Estoque</Table.Th>
            <Table.Th ta="right">Preço</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {produtos.map((p) => (
            <Table.Tr key={p.sku}>
              <Table.Td ff="monospace" fz="xs">
                {p.sku}
              </Table.Td>
              <Table.Td>{p.nome}</Table.Td>
              <Table.Td ta="right">{p.estoque.toLocaleString('pt-BR')}</Table.Td>
              <Table.Td ta="right">{p.preco}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
