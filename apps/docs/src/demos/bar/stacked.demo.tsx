import { BarChart } from '@jcdecor/ui/charts';

const data = [
  { mes: 'Abr', pisos: 52100, papel: 31800, cortinas: 24600, grama: 18900, paineis: 14900 },
  { mes: 'Mai', pisos: 55400, papel: 33900, cortinas: 26200, grama: 20100, paineis: 16200 },
  { mes: 'Jun', pisos: 49800, papel: 30500, cortinas: 27900, grama: 15400, paineis: 15000 },
  { mes: 'Jul', pisos: 58900, papel: 35200, cortinas: 29400, grama: 19800, paineis: 16900 },
  { mes: 'Ago', pisos: 63500, papel: 37600, cortinas: 30100, grama: 23400, paineis: 18300 },
  { mes: 'Set', pisos: 67800, papel: 39400, cortinas: 31900, grama: 26300, paineis: 18830 },
];

export default function Demo() {
  return (
    <BarChart
      data={data}
      dataKey="mes"
      type="stacked"
      withLegend
      series={[
        { name: 'pisos', label: 'Pisos' },
        { name: 'papel', label: 'Papel de parede' },
        { name: 'cortinas', label: 'Cortinas' },
        { name: 'grama', label: 'Grama sintética' },
        { name: 'paineis', label: 'Painéis' },
      ]}
    />
  );
}
