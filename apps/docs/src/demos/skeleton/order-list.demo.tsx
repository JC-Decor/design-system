import { Group, Paper, Skeleton, Stack } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 480 };

export default function Demo() {
  return (
    <Paper withBorder p="md">
      <Stack gap="md">
        {[0, 1, 2].map((row) => (
          <Group key={row} gap="sm" wrap="nowrap">
            <Skeleton height={40} circle />
            <Stack gap={8} style={{ flex: 1 }}>
              <Skeleton height={12} width="45%" />
              <Skeleton height={10} width="80%" />
            </Stack>
            <Skeleton height={24} width={72} radius="xl" />
          </Group>
        ))}
      </Stack>
    </Paper>
  );
}
