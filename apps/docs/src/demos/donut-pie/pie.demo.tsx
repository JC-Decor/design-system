import { Group } from '@jcdecor/ui';
import { PieChart } from '@jcdecor/ui/charts';

const data = [
  { name: 'Sudeste', value: 58 },
  { name: 'Sul', value: 19 },
  { name: 'Nordeste', value: 12 },
  { name: 'Centro-Oeste e Norte', value: 11 },
];

export default function Demo() {
  return (
    <Group justify="center" gap={48}>
      <PieChart data={data} withLabels labelsType="percent" labelsPosition="inside" size={200} />
      <PieChart
        data={data}
        withLabels
        withLabelsLine
        labelsPosition="outside"
        labelsType="name"
        size={180}
      />
    </Group>
  );
}
