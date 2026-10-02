import { ColorPicker, Group } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Group align="flex-start" justify="center">
      {(['xs', 'sm', 'md', 'lg'] as const).map((size) => (
        <ColorPicker key={size} size={size} format="rgba" defaultValue="rgba(91, 107, 90, 0.8)" />
      ))}
    </Group>
  );
}
