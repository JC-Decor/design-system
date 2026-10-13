import { Text } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Text variant="gradient" fz="var(--type-display-md)" fw={700}>
      Semana da Saúde 2026
    </Text>
  );
}
