import { Group, Icon, Stack, ThemeIcon } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

const cores = ['navy', 'lavender', 'blue', 'green', 'yellow', 'coral', 'ink'];

export default function Demo() {
  return (
    <Stack>
      {(['filled', 'light', 'outline', 'default'] as const).map((variant) => (
        <Group key={variant} justify="center">
          {cores.map((color) => (
            <ThemeIcon key={color} variant={variant} color={color} size="lg">
              <Icon name="shield" size={18} />
            </ThemeIcon>
          ))}
        </Group>
      ))}
    </Stack>
  );
}
