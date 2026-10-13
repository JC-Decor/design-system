import { Checkbox, Group } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Group justify="center">
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <Checkbox key={size} size={size} label={size} defaultChecked />
      ))}
    </Group>
  );
}
