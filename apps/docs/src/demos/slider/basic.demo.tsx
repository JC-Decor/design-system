import { useState } from 'react';
import { Group, Slider, Stack, Text } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 480 };

const formatar = (v: number) => `${v.toFixed(2).replace('.', ',')} m`;

export default function Demo() {
  const [largura, setLargura] = useState(2.4);

  return (
    <Stack w="100%" gap={40}>
      <Group justify="space-between">
        <Text fz="sm" fw={500} c="var(--ds-text-2)">
          Largura da cortina
        </Text>
        <Text fz="sm" fw={600}>
          {formatar(largura)}
        </Text>
      </Group>
      <Slider value={largura} onChange={setLargura} min={0.5} max={6} step={0.05} label={formatar} thumbLabel="Largura da cortina" />
    </Stack>
  );
}
