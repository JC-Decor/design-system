import { useState } from 'react';
import { AngleSlider, Box, Group, Text } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  const [angle, setAngle] = useState(135);

  return (
    <Group gap="xl" align="center" justify="center">
      <AngleSlider value={angle} onChange={setAngle} size={88} withLabel={false} aria-label="Direção do degradê" />
      <div>
        <Box
          w={200}
          h={120}
          style={{
            borderRadius: 'var(--ds-radius)',
            background: `linear-gradient(${angle}deg, var(--mantine-color-horizon-6), var(--mantine-color-obsidian-6))`,
          }}
        />
        <Text fz="sm" c="var(--ds-text-2)" mt="xs">
          Degradê do banner · {angle}°
        </Text>
      </div>
    </Group>
  );
}
