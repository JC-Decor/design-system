import { BarChart } from '@jcdecor/ui/charts';

const data = [
  { canal: 'Orgânico', novos: 68, recorrentes: 32 },
  { canal: 'Pago', novos: 81, recorrentes: 19 },
  { canal: 'Social', novos: 74, recorrentes: 26 },
  { canal: 'E-mail', novos: 22, recorrentes: 78 },
  { canal: 'Direto', novos: 35, recorrentes: 65 },
];

export default function Demo() {
  return (
    <BarChart
      data={data}
      dataKey="canal"
      type="percent"
      withLegend
      series={[
        { name: 'novos', label: 'Novos clientes' },
        { name: 'recorrentes', label: 'Recorrentes' },
      ]}
    />
  );
}
