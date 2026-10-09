import { Group, RingProgress, Stack, Text } from '@jcdecor/ui';
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
          sections={[{ value: 82, color: 'evergreen' }]}
          label={
            <Text ta="center" fw={700} fz="lg">
              82%
            </Text>
          }
        />
        <Text fz="sm" c="var(--ds-text-2)">
          Entregas no prazo
        </Text>
      </Stack>
      <Stack align="center" gap={4}>
        <RingProgress
          size={120}
          thickness={12}
          sections={[
            { value: 55, color: 'horizon', tooltip: 'Site — 55%' },
            { value: 30, color: 'evergreen', tooltip: 'Marketplace — 30%' },
            { value: 15, color: 'electric', tooltip: 'Loja física — 15%' },
          ]}
          label={
            <Text ta="center" fz="xs" c="var(--ds-text-3)">
              Canais
            </Text>
          }
        />
        <Text fz="sm" c="var(--ds-text-2)">
          Origem dos pedidos
        </Text>
      </Stack>
    </Group>
  );
}
