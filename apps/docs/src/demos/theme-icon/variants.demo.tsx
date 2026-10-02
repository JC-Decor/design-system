import { Group, Stack, ThemeIcon } from '@jcdecor/ui';
import { IconShieldCheck } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

const cores = ['horizon', 'evergreen', 'electric', 'danger', 'obsidian'];

export default function Demo() {
  return (
    <Stack>
      {(['filled', 'light', 'outline', 'default'] as const).map((variant) => (
        <Group key={variant} justify="center">
          {cores.map((color) => (
            <ThemeIcon key={color} variant={variant} color={color} size="lg">
              <IconShieldCheck size={20} />
            </ThemeIcon>
          ))}
        </Group>
      ))}
    </Stack>
  );
}
