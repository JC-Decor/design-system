import { RangeSlider, Stack, Text } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 480 };

const marks = [6, 9, 12, 15, 18, 21].map((h) => ({ value: h, label: `${h}h` }));
const hora = (v: number) => `${Math.floor(v)}:${v % 1 ? '30' : '00'}`;

export default function Demo() {
  return (
    <Stack w="100%" gap="xs" pb="lg">
      <Text fz="sm" fw={600} c="var(--ds-text-2)">
        Horário flexível · entrada e saída
      </Text>
      <RangeSlider
        min={6}
        max={22}
        step={0.5}
        minRange={4}
        marks={marks}
        defaultValue={[8, 17.5]}
        label={hora}
        thumbFromLabel="Horário de entrada"
        thumbToLabel="Horário de saída"
      />
    </Stack>
  );
}
