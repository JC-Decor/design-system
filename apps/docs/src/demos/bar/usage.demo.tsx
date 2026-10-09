import { BarChart } from '@jcdecor/ui/charts';

const data = [
  { mes: 'Abr', y2025: 118400, y2026: 142300 },
  { mes: 'Mai', y2025: 126900, y2026: 151800 },
  { mes: 'Jun', y2025: 131200, y2026: 138600 },
  { mes: 'Jul', y2025: 129800, y2026: 160200 },
  { mes: 'Ago', y2025: 141500, y2026: 172900 },
  { mes: 'Set', y2025: 150300, y2026: 184230 },
];

export default function Demo() {
  return (
    <BarChart
      data={data}
      dataKey="mes"
      withLegend
      series={[
        { name: 'y2025', label: '2025' },
        { name: 'y2026', label: '2026' },
      ]}
    />
  );
}
