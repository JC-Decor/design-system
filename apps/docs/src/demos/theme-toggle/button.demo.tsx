import { ThemeToggle, Group } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Group>
      <ThemeToggle as="button" />
      <ThemeToggle as="button" variant="subtle" label="Modo escuro" />
    </Group>
  );
}
