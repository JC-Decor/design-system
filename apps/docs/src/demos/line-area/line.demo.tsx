import { LineChart } from '@jcdecor/ui/charts';

const data = [
  { semana: '04/08', organico: 4210, pago: 2980, social: 1520 },
  { semana: '11/08', organico: 4480, pago: 3120, social: 1610 },
  { semana: '18/08', organico: 4390, pago: 3410, social: 1890 },
  { semana: '25/08', organico: 4720, pago: 3050, social: 2140 },
  { semana: '01/09', organico: 5010, pago: 3290, social: 1980 },
  { semana: '08/09', organico: 5230, pago: 3580, social: 2260 },
  { semana: '15/09', organico: 5110, pago: 3820, social: 2410 },
  { semana: '22/09', organico: 5490, pago: 3690, social: 2550 },
];

export default function Demo() {
  return (
    <LineChart
      data={data}
      dataKey="semana"
      withLegend
      series={[
        { name: 'organico', label: 'Orgânico' },
        { name: 'pago', label: 'Pago' },
        { name: 'social', label: 'Social' },
      ]}
    />
  );
}
