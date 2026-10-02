import { ThemeToggle, Group } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Group>
      <ThemeToggle />
      <ThemeToggle variant="default" />
      <ThemeToggle variant="light" color="horizon" radius="xl" />
    </Group>
  );
}
