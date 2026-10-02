import { Group, Loader, Stack, Text } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

const types = ['oval', 'dots', 'bars'] as const;

export default function Demo() {
  return (
    <Group gap={48}>
      {types.map((type) => (
        <Stack key={type} align="center" gap="sm">
          <Loader type={type} />
          <Text fz="xs" c="var(--ds-text-3)">
            {type}
          </Text>
        </Stack>
      ))}
    </Group>
  );
}
