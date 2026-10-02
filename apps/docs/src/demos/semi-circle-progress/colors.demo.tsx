import { Group, SemiCircleProgress, Stack, Text } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

const sellers = [
  { name: 'Ana', value: 104, color: 'evergreen' },
  { name: 'Bruno', value: 78, color: 'horizon' },
  { name: 'Carla', value: 41, color: 'danger' },
];

export default function Demo() {
  return (
    <Group gap="xl">
      {sellers.map((seller) => (
        <Stack key={seller.name} align="center" gap={4}>
          <SemiCircleProgress
            value={Math.min(seller.value, 100)}
            size={140}
            thickness={12}
            filledSegmentColor={seller.color}
            label={`${seller.value}%`}
          />
          <Text fz="sm" c="var(--ds-text-2)">
            {seller.name}
          </Text>
        </Stack>
      ))}
    </Group>
  );
}
