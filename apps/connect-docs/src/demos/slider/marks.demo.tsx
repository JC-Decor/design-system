import { Slider, Stack, Text } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 480 };

const marks = [
  { value: 0, label: 'Júnior' },
  { value: 1, label: 'Pleno' },
  { value: 2, label: 'Sênior' },
  { value: 3, label: 'Especialista' },
];

export default function Demo() {
  return (
    <Stack w="100%" gap="xs" pb="lg">
      <Text fz="sm" fw={600} c="var(--ds-text-2)">
        Senioridade da vaga
      </Text>
      <Slider defaultValue={1} min={0} max={3} step={1} marks={marks} restrictToMarks label={null} thumbLabel="Senioridade" />
    </Stack>
  );
}
