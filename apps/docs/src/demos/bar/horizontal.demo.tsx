import { formatCurrency } from '@jcdecor/ui';
import { BarChart } from '@jcdecor/ui/charts';

const data = [
  { categoria: 'Pisos', receita: 67800 },
  { categoria: 'Papel de parede', receita: 39400 },
  { categoria: 'Cortinas', receita: 31900 },
  { categoria: 'Grama sintética', receita: 26300 },
  { categoria: 'Painéis', receita: 18830 },
];

export default function Demo() {
  return (
    <BarChart
      data={data}
      dataKey="categoria"
      orientation="vertical"
      h={260}
      yAxisProps={{ width: 120 }}
      valueFormatter={(value) => formatCurrency(value, { maximumFractionDigits: 0 })}
      series={[{ name: 'receita', label: 'Receita em setembro' }]}
    />
  );
}
