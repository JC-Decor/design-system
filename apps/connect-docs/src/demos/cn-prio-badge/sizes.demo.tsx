import { Group, PrioBadge, StatusBadge } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Group justify="center" align="center">
      {(['xs', 'sm', 'md', 'lg'] as const).map((size) => (
        <PrioBadge key={size} size={size} tone="med" dot>Média · {size}</PrioBadge>
      ))}
      <StatusBadge size="lg" status="ativo" />
    </Group>
  );
}
