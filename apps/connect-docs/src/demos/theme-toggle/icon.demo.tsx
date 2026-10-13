import { ThemeToggle, Group } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Group>
      <ThemeToggle />
      <ThemeToggle variant="default" />
      <ThemeToggle variant="light" color="navy" radius="xl" />
    </Group>
  );
}
