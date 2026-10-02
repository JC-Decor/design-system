import { Group, JcLogo } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Group gap={48} align="center">
      <JcLogo type="full" size={48} />
      <JcLogo type="mark" size={48} />
      <JcLogo type="wordmark" size={28} />
    </Group>
  );
}
