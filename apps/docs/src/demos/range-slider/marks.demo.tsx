import { RangeSlider, Stack, Text } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 480 };

const marks = [
  { value: 1, label: '1 m' },
  { value: 2, label: '2 m' },
  { value: 3, label: '3 m' },
  { value: 4, label: '4 m' },
  { value: 5, label: '5 m' },
];

export default function Demo() {
  return (
    <Stack w="100%" gap="xs" pb="lg">
      <Text fz="sm" fw={500} c="var(--ds-text-2)">
        Altura do pé-direito
      </Text>
      <RangeSlider
        min={1}
        max={5}
        step={0.1}
        marks={marks}
        defaultValue={[2.4, 3.2]}
        label={(v) => `${v.toFixed(1).replace('.', ',')} m`}
        thumbFromLabel="Altura mínima"
        thumbToLabel="Altura máxima"
      />
    </Stack>
  );
}
