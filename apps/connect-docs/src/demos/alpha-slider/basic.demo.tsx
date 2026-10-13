import { useState } from 'react';
import { AlphaSlider, ColorSwatch, Group, Stack, Text } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

const COR = '#07016B';

export default function Demo() {
  const [value, setValue] = useState(0.55);

  return (
    <Stack w="100%" gap="sm">
      <Group justify="space-between">
        <Text fz="sm" fw={600} c="var(--ds-text-2)">
          Sobreposição da foto de capa
        </Text>
        <Group gap="xs">
          <ColorSwatch color={`rgba(7, 1, 107, ${value})`} size={20} />
          <Text fz="sm">{Math.round(value * 100)}%</Text>
        </Group>
      </Group>
      <AlphaSlider color={COR} value={value} onChange={setValue} aria-label="Opacidade da sobreposição" />
    </Stack>
  );
}
