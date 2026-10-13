import { Group, Loader, Stack } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Stack align="center" gap="lg">
      <Group align="center" gap="lg">
        {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
          <Loader key={size} size={size} />
        ))}
      </Group>
      <Group align="center" gap="lg">
        <Loader color="navy" />
        <Loader color="lavender" />
        <Loader color="blue" />
        <Loader color="green" />
        <Loader color="yellow" />
        <Loader color="coral" />
        <Loader color="ink" />
      </Group>
    </Stack>
  );
}
