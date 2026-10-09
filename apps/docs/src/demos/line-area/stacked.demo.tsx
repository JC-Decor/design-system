import { AreaChart } from '@jcdecor/ui/charts';

const data = [
  { mes: 'Abr', organico: 18200, pago: 9800, social: 5400, email: 3100, direto: 4200 },
  { mes: 'Mai', organico: 19400, pago: 10600, social: 5900, email: 3300, direto: 4400 },
  { mes: 'Jun', organico: 18900, pago: 11800, social: 6800, email: 2900, direto: 4100 },
  { mes: 'Jul', organico: 21300, pago: 12100, social: 7600, email: 3600, direto: 4700 },
  { mes: 'Ago', organico: 22800, pago: 11400, social: 8200, email: 3900, direto: 5000 },
  { mes: 'Set', organico: 24100, pago: 12900, social: 8800, email: 4100, direto: 5300 },
];

export default function Demo() {
  return (
    <AreaChart
      data={data}
      dataKey="mes"
      type="stacked"
      withLegend
      series={[
        { name: 'organico', label: 'Orgânico' },
        { name: 'pago', label: 'Pago' },
        { name: 'social', label: 'Social' },
        { name: 'email', label: 'E-mail' },
        { name: 'direto', label: 'Direto' },
      ]}
    />
  );
}
