import { Group } from '@jcdecor/ui';
import { DonutChart } from '@jcdecor/ui/charts';

const data = [
  { name: 'Pix', value: 412 },
  { name: 'Cartão', value: 698 },
  { name: 'Boleto', value: 174 },
];

export default function Demo() {
  return (
    <Group justify="center" gap={48}>
      <DonutChart data={data} withLabels withLabelsLine labelsType="percent" size={180} />
      <DonutChart data={data} startAngle={180} endAngle={0} size={200} chartLabel="1.284 pedidos" />
    </Group>
  );
}
