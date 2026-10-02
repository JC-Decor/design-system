import { Center, SegmentedControl } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Center>
      <SegmentedControl data={['7 dias', '30 dias', '60 dias', '12 meses']} defaultValue="30 dias" />
    </Center>
  );
}
