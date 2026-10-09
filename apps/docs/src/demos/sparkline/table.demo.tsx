import { DataTable, formatCurrency } from '@jcdecor/ui';
import { Sparkline } from '@jcdecor/ui/charts';

interface Row {
  produto: string;
  vendas: number;
  receita: number;
  tendencia: number[];
}

const rows: Row[] = [
  {
    produto: 'Piso vinílico Carvalho Natural',
    vendas: 312,
    receita: 28048.8,
    tendencia: [32, 38, 41, 45, 50, 49, 57],
  },
  {
    produto: 'Papel de parede Linho Areia',
    vendas: 198,
    receita: 15820.2,
    tendencia: [35, 31, 29, 30, 26, 24, 23],
  },
  {
    produto: 'Cortina blackout Cinza',
    vendas: 143,
    receita: 21307,
    tendencia: [18, 20, 19, 22, 21, 23, 20],
  },
  {
    produto: 'Grama sintética 25 mm',
    vendas: 121,
    receita: 9668,
    tendencia: [10, 12, 15, 17, 18, 22, 27],
  },
];

export default function Demo() {
  return (
    <DataTable
      data={rows}
      rowKey={(row) => row.produto}
      columns={[
        { key: 'produto', header: 'Produto' },
        { key: 'vendas', header: 'Vendas', numeric: true },
        {
          key: 'receita',
          header: 'Receita',
          numeric: true,
          render: (row) => formatCurrency(row.receita),
        },
        {
          key: 'tendencia',
          header: 'Últimos 7 dias',
          width: 140,
          render: (row) => (
            <Sparkline
              h={32}
              w={120}
              data={row.tendencia}
              trendColors={{ positive: 'evergreen.6', negative: 'danger.6' }}
            />
          ),
        },
      ]}
    />
  );
}
