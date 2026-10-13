import { Button, Group, Stack } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

const colors = ['navy', 'lavender', 'blue', 'green', 'yellow', 'coral', 'ink'];

export default function Demo() {
  return (
    <Stack>
      {(['filled', 'light', 'outline'] as const).map((variant) => (
        <Group key={variant} justify="center">
          {colors.map((color) => (
            <Button key={color} color={color} variant={variant} size="sm">
              {color}
            </Button>
          ))}
        </Group>
      ))}
    </Stack>
  );
}
