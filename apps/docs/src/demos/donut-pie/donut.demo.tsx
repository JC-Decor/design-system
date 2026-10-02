import { Group } from '@jcdecor/ui';
import { DonutChart } from '@jcdecor/ui/charts';

const data = [
  { name: 'Orgânico', value: 24100 },
  { name: 'Pago', value: 12900 },
  { name: 'Social', value: 8800 },
  { name: 'E-mail', value: 4100 },
  { name: 'Direto', value: 5059 },
];

export default function Demo() {
  return (
    <Group justify="center">
      <DonutChart data={data} chartLabel="54.959 acessos" size={200} thickness={28} />
    </Group>
  );
}
