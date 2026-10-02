import { Group, Loader, Stack } from '@jcdecor/ui';
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
        <Loader color="horizon" />
        <Loader color="evergreen" />
        <Loader color="obsidian" />
        <Loader color="danger" />
        <Loader color="gray" />
      </Group>
    </Stack>
  );
}
