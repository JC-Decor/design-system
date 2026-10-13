import { Center, SegmentedControl } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Center>
      <SegmentedControl data={['Semana', 'Mês', 'Trimestre', 'Ano']} defaultValue="Mês" />
    </Center>
  );
}
