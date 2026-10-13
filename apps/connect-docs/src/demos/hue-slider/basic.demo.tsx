import { useState } from 'react';
import { ColorSwatch, Group, HueSlider, Stack, Text } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

export default function Demo() {
  const [hue, setHue] = useState(248);

  return (
    <Stack w="100%" gap="sm">
      <Group justify="space-between">
        <Text fz="sm" fw={600} c="var(--ds-text-2)">
          Tom da equipe no calendário
        </Text>
        <Group gap="xs">
          <ColorSwatch color={`hsl(${hue}, 50%, 50%)`} size={20} />
          <Text fz="sm">{hue}°</Text>
        </Group>
      </Group>
      <HueSlider value={hue} onChange={setHue} aria-label="Tom da equipe no calendário" />
    </Stack>
  );
}
