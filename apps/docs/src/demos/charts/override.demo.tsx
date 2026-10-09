import { formatCurrency } from '@jcdecor/ui';
import { LineChart } from '@jcdecor/ui/charts';

const data = [
  { mes: 'Abr', receita: 240700, meta: 230000 },
  { mes: 'Mai', receita: 256700, meta: 240000 },
  { mes: 'Jun', receita: 250900, meta: 250000 },
  { mes: 'Jul', receita: 287000, meta: 260000 },
  { mes: 'Ago', receita: 312400, meta: 280000 },
  { mes: 'Set', receita: 335430, meta: 300000 },
];

export default function Demo() {
  return (
    <LineChart
      data={data}
      dataKey="mes"
      h={300}
      curveType="linear"
      withLegend
      valueFormatter={(value) => formatCurrency(value, { maximumFractionDigits: 0 })}
      yAxisProps={{ width: 90 }}
      series={[
        { name: 'receita', label: 'Receita', color: 'evergreen.6' },
        { name: 'meta', label: 'Meta', color: 'gray.5', strokeDasharray: '5 5' },
      ]}
    />
  );
}
