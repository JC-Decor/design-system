import { ThemeToggle, Group, Text, useComputedColorScheme } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  const scheme = useComputedColorScheme('light');

  return (
    <Group>
      <ThemeToggle variant="default" />
      <Text fz="sm" c="var(--ds-text-2)">
        Tema atual: <strong>{scheme === 'dark' ? 'escuro' : 'claro'}</strong>
      </Text>
    </Group>
  );
}
