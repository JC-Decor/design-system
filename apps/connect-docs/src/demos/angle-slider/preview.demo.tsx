import { useState } from 'react';
import { AngleSlider, Box, Group, Text } from '@jcdecor/connect-ui';
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
            borderRadius: 'var(--mantine-radius-md)',
            background: `linear-gradient(${angle}deg, var(--mantine-color-navy-6), var(--mantine-color-lavender-5))`,
          }}
        />
        <Text fz="sm" c="var(--ds-text-2)" mt="xs">
          Capa do comunicado · {angle}°
        </Text>
      </div>
    </Group>
  );
}
