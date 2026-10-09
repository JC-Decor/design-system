import { Button, Group, Stack } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

const colors = ['horizon', 'evergreen', 'obsidian', 'danger'];

export default function Demo() {
  return (
    <Stack>
      {(['filled', 'light', 'outline'] as const).map((variant) => (
        <Group key={variant} justify="center">
          {colors.map((color) => (
            <Button key={color} color={color} variant={variant}>
              {color}
            </Button>
          ))}
        </Group>
      ))}
    </Stack>
  );
}
