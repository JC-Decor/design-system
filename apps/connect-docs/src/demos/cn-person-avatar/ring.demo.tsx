import { Group, PersonAvatar, Stack, Text } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Group gap="xl">
      {([false, 'sm', true] as const).map((ring) => (
        <Stack key={String(ring)} align="center" gap={6}>
          <PersonAvatar size={56} seed="AS" tone="blue" ring={ring} />
          <Text fz="xs" c="dimmed">ring={String(ring)}</Text>
        </Stack>
      ))}
    </Group>
  );
}
