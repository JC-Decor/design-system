import { LineChart } from '@jcdecor/ui/charts';

const data = [
  { dia: '01/09', conversao: 1.8 },
  { dia: '05/09', conversao: 2.1 },
  { dia: '09/09', conversao: 1.9 },
  { dia: '13/09', conversao: 2.4 },
  { dia: '17/09', conversao: 2.7 },
  { dia: '21/09', conversao: 2.3 },
  { dia: '25/09', conversao: 2.9 },
  { dia: '29/09', conversao: 3.1 },
];

export default function Demo() {
  return (
    <LineChart
      data={data}
      dataKey="dia"
      unit="%"
      withDots
      valueFormatter={(value) => value.toLocaleString('pt-BR', { minimumFractionDigits: 1 })}
      referenceLines={[{ y: 2.5, label: 'Meta 2,5%', color: 'danger.6' }]}
      series={[{ name: 'conversao', label: 'Taxa de conversão' }]}
    />
  );
}
