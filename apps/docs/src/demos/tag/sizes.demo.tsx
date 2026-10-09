import { Tag, Group } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Group align="center">
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <Tag key={size} size={size} tone="success" withIcon>
          Em estoque
        </Tag>
      ))}
    </Group>
  );
}
