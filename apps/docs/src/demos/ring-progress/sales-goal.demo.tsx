import { Group, Paper, RingProgress, Stack, Text } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

const sold = 184_000;
const goal = 250_000;

export default function Demo() {
  const percent = Math.round((sold / goal) * 100);

  return (
    <Paper withBorder p="lg">
      <Group gap="lg" wrap="nowrap">
        <RingProgress
          size={132}
          thickness={14}
          roundCaps
          sections={[{ value: percent, color: 'horizon' }]}
          label={
            <Text ta="center" fw={700} fz="xl">
              {percent}%
            </Text>
          }
        />
        <Stack gap={2}>
          <Text fz="sm" c="var(--ds-text-3)">
            Meta de vendas · outubro
          </Text>
          <Text fw={700} fz="xl">
            R$ 184 mil
          </Text>
          <Text fz="sm" c="var(--ds-text-2)">
            de R$ 250 mil — faltam 12 dias
          </Text>
        </Stack>
      </Group>
    </Paper>
  );
}
