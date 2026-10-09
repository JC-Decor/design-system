import { useState } from 'react';
import { ColorSwatch, Group, HueSlider, Stack, Text } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

export default function Demo() {
  const [hue, setHue] = useState(28);

  return (
    <Stack w="100%" gap="sm">
      <Group justify="space-between">
        <Text fz="sm" fw={500} c="var(--ds-text-2)">
          Tom da almofada
        </Text>
        <Group gap="xs">
          <ColorSwatch color={`hsl(${hue}, 45%, 55%)`} size={20} />
          <Text fz="sm">{hue}°</Text>
        </Group>
      </Group>
      <HueSlider value={hue} onChange={setHue} aria-label="Tom da almofada" />
    </Stack>
  );
}
