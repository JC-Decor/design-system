import { Group, RingProgress, Stack, Text } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Group gap="xl">
      <Stack align="center" gap={4}>
        <RingProgress
          size={120}
          thickness={12}
          roundCaps
          sections={[{ value: 82, color: 'green' }]}
          label={
            <Text ta="center" fw={700} fz="lg">
              82%
            </Text>
          }
        />
        <Text fz="sm" c="var(--ds-text-2)">
          Onboarding concluído
        </Text>
      </Stack>
      <Stack align="center" gap={4}>
        <RingProgress
          size={120}
          thickness={12}
          sections={[
            { value: 55, color: 'navy', tooltip: 'Presencial — 55%' },
            { value: 30, color: 'lavender', tooltip: 'Híbrido — 30%' },
            { value: 15, color: 'blue', tooltip: 'Remoto — 15%' },
          ]}
          label={
            <Text ta="center" fz="xs" c="var(--ds-text-3)">
              Modelo
            </Text>
          }
        />
        <Text fz="sm" c="var(--ds-text-2)">
          Modelo de trabalho
        </Text>
      </Stack>
    </Group>
  );
}
