import { Badge, Group } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Group justify="center" align="center">
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <Badge key={size} size={size}>
          Badge {size}
        </Badge>
      ))}
    </Group>
  );
}
