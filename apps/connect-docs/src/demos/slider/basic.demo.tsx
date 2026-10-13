import { useState } from 'react';
import { Group, Slider, Stack, Text } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 480 };

const formatar = (v: number) => `${Math.floor(v)}h${v % 1 ? '30' : ''}`;

export default function Demo() {
  const [jornada, setJornada] = useState(8);

  return (
    <Stack w="100%" gap={40}>
      <Group justify="space-between">
        <Text fz="sm" fw={600} c="var(--ds-text-2)">
          Jornada diária
        </Text>
        <Text fz="sm" fw={600}>
          {formatar(jornada)}
        </Text>
      </Group>
      <Slider value={jornada} onChange={setJornada} min={4} max={10} step={0.5} label={formatar} thumbLabel="Jornada diária" />
    </Stack>
  );
}
