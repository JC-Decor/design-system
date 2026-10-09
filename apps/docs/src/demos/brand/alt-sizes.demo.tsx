import { Group, JcLogoAlt } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Group gap="lg" align="flex-end">
      {[16, 24, 32, 48, 64, 96].map((size) => (
        <JcLogoAlt key={size} size={size} strokeColor="none" />
      ))}
    </Group>
  );
}
