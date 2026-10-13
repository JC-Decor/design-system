import { SimpleGrid, SkeletonBlock, Stack, Text } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

const variants = ['text', 'card', 'list', 'table', 'profile', 'chart'] as const;

export default function Demo() {
  return (
    <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
      {variants.map((variant) => (
        <Stack key={variant} gap={6}>
          <Text fz="xs" c="dimmed" ff="monospace">variant="{variant}"</Text>
          <SkeletonBlock variant={variant} rows={variant === 'list' || variant === 'table' ? 2 : 3} />
        </Stack>
      ))}
    </SimpleGrid>
  );
}
