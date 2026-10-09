import { formatCompact, formatCurrency } from '@jcdecor/ui';
import { AreaChart } from '@jcdecor/ui/charts';

const data = [
  { mes: 'Out', vendas: 128400 },
  { mes: 'Nov', vendas: 176900 },
  { mes: 'Dez', vendas: 214300 },
  { mes: 'Jan', vendas: 119800 },
  { mes: 'Fev', vendas: 124500 },
  { mes: 'Mar', vendas: 141200 },
  { mes: 'Abr', vendas: 142300 },
  { mes: 'Mai', vendas: 151800 },
  { mes: 'Jun', vendas: 138600 },
  { mes: 'Jul', vendas: 160200 },
  { mes: 'Ago', vendas: 172900 },
  { mes: 'Set', vendas: 184230 },
];

export default function Demo() {
  return (
    <AreaChart
      data={data}
      dataKey="mes"
      series={[{ name: 'vendas', label: 'Vendas' }]}
      valueFormatter={(value) => formatCurrency(value)}
      yAxisProps={{ tickFormatter: (value: number) => `R$ ${formatCompact(value)}` }}
      withGradient
    />
  );
}
