import { Group, Skeleton, Stack } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

export default function Demo() {
  return (
    <Stack gap="sm">
      <Group gap="sm">
        <Skeleton height={56} circle />
        <Skeleton height={56} width={56} radius="md" />
        <Skeleton height={32} width={120} radius="sm" />
        <Skeleton height={24} width={64} radius="xl" animate={false} />
      </Group>
      <Skeleton height={8} radius="xl" />
      <Skeleton height={8} radius="xl" width="85%" />
      <Skeleton height={8} radius="xl" width="60%" />
    </Stack>
  );
}
