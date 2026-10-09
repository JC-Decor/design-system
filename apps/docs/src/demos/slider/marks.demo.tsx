import { Slider, Stack, Text } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 480 };

const marks = [
  { value: 0, label: 'Blackout' },
  { value: 25, label: '75%' },
  { value: 50, label: '50%' },
  { value: 75, label: '25%' },
  { value: 100, label: 'Voil' },
];

export default function Demo() {
  return (
    <Stack w="100%" gap="xs" pb="lg">
      <Text fz="sm" fw={500} c="var(--ds-text-2)">
        Bloqueio de luz do tecido
      </Text>
      <Slider defaultValue={25} step={25} marks={marks} restrictToMarks label={null} thumbLabel="Bloqueio de luz" />
    </Stack>
  );
}
