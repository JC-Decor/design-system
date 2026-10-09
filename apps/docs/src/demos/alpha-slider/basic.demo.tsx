import { useState } from 'react';
import { AlphaSlider, ColorSwatch, Group, Stack, Text } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

const COR = '#2F3E46';

export default function Demo() {
  const [value, setValue] = useState(0.55);

  return (
    <Stack w="100%" gap="sm">
      <Group justify="space-between">
        <Text fz="sm" fw={500} c="var(--ds-text-2)">
          Opacidade do voil
        </Text>
        <Group gap="xs">
          <ColorSwatch color={`rgba(47, 62, 70, ${value})`} size={20} />
          <Text fz="sm">{Math.round(value * 100)}%</Text>
        </Group>
      </Group>
      <AlphaSlider color={COR} value={value} onChange={setValue} aria-label="Opacidade do voil" />
    </Stack>
  );
}
