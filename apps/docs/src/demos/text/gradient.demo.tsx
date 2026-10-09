import { Text } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Text variant="gradient" fz="var(--type-headline-lg)" fw={700}>
      Black Friday JC Decor
    </Text>
  );
}
