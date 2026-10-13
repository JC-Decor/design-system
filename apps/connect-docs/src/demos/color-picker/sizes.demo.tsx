import { ColorPicker, Group } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Group align="flex-start" justify="center">
      {(['xs', 'sm', 'md', 'lg'] as const).map((size) => (
        <ColorPicker key={size} size={size} format="rgba" defaultValue="rgba(7, 1, 107, 0.8)" />
      ))}
    </Group>
  );
}
