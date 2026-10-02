import { Group, Switch } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Group justify="center">
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <Switch key={size} size={size} defaultChecked aria-label={`Switch ${size}`} />
      ))}
    </Group>
  );
}
