import { Card, Group, Skeleton, Stack } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 480 };

export default function Demo() {
  return (
    <Card>
      <Stack gap="md">
        {[0, 1, 2].map((row) => (
          <Group key={row} gap="sm" wrap="nowrap">
            <Skeleton height={38} circle />
            <Stack gap={8} style={{ flex: 1 }}>
              <Skeleton height={12} width="45%" />
              <Skeleton height={10} width="70%" />
            </Stack>
            {/* Mesmo formato do Badge: pílula de 20px */}
            <Skeleton height={20} width={64} radius="xl" />
          </Group>
        ))}
      </Stack>
    </Card>
  );
}
