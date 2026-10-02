import { Badge, Group, Text, VisuallyHidden } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <div>
      <Group gap="xs">
        <Text td="line-through" c="var(--ds-text-3)" fz="sm">
          <VisuallyHidden>Preço anterior:</VisuallyHidden>
          R$ 129,90
        </Text>
        <Text fw={600} c="var(--ds-primary)" fz="lg">
          <VisuallyHidden>Preço atual:</VisuallyHidden>
          R$ 99,90
        </Text>
        <Badge color="danger">-23%</Badge>
      </Group>
    </div>
  );
}
