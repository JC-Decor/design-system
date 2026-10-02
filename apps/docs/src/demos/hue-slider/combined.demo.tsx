import { useState } from 'react';
import { AlphaSlider, ColorSwatch, Group, HueSlider, Stack, Text } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

export default function Demo() {
  const [hue, setHue] = useState(210);
  const [alpha, setAlpha] = useState(0.8);
  const base = `hsl(${hue}, 40%, 45%)`;
  const final = `hsla(${hue}, 40%, 45%, ${alpha})`;

  return (
    <Group w="100%" wrap="nowrap" align="center">
      <ColorSwatch color={final} size={56} radius="sm" />
      <Stack gap="sm" style={{ flex: 1 }}>
        <HueSlider value={hue} onChange={setHue} aria-label="Matiz" />
        <AlphaSlider color={base} value={alpha} onChange={setAlpha} aria-label="Transparência" />
        <Text fz="xs" c="var(--ds-text-3)">
          {final}
        </Text>
      </Stack>
    </Group>
  );
}
