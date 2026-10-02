import { DataTable, Tag, Text, type DataTableColumn } from '@jcdecor/ui';

interface Product {
  sku: string;
  name: string;
  price: number;
  stock: number;
}

const data: Product[] = [
  { sku: '505-CN', name: 'Piso vinílico Carvalho Natural', price: 89.9, stock: 420 },
  { sku: 'PP-LB12', name: 'Papel de parede Linho Bege', price: 129.9, stock: 18 },
  { sku: 'PR-FJ06', name: 'Painel ripado Freijó', price: 249.9, stock: 0 },
  { sku: 'GS-25', name: 'Grama sintética 25 mm', price: 59.9, stock: 96 },
];

function stockTag(stock: number) {
  if (stock === 0) return <Tag tone="error" withIcon>Esgotado</Tag>;
  if (stock < 20) return <Tag tone="warn" withIcon>Baixo</Tag>;
  return <Tag tone="success" withIcon>Disponível</Tag>;
}

const columns: DataTableColumn<Product>[] = [
  {
    key: 'name',
    header: 'Produto',
    sortable: true,
    render: (row) => (
      <div>
        <Text fz="sm" fw={600}>{row.name}</Text>
        <Text fz="xs" c="var(--ds-text-3)">SKU {row.sku}</Text>
      </div>
    ),
  },
  { key: 'price', header: 'Preço', numeric: true, sortable: true, format: { style: 'currency', currency: 'BRL' } },
  { key: 'stock', header: 'Estoque', numeric: true, sortable: true },
  { id: 'status', header: 'Status', render: (row) => stockTag(row.stock), width: 140 },
];

export default function Demo() {
  return <DataTable columns={columns} data={data} rowKey={(row) => row.sku} striped />;
}
