import { Center, SegmentedControl } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Center>
      <SegmentedControl orientation="vertical" data={['Todas', 'Pendentes', 'Aprovadas', 'Recusadas']} defaultValue="Pendentes" />
    </Center>
  );
}
