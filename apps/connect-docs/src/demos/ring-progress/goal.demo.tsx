import { Card, Group, RingProgress, Stack, Text } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

const avaliados = 186;
const total = 240;

export default function Demo() {
  const percent = Math.round((avaliados / total) * 100);

  return (
    <Card>
      <Group gap="lg" wrap="nowrap">
        <RingProgress
          size={132}
          thickness={14}
          roundCaps
          sections={[{ value: percent, color: 'navy' }]}
          label={
            <Text ta="center" fw={700} fz="xl">
              {percent}%
            </Text>
          }
        />
        <Stack gap={2}>
          <Text fz="sm" c="var(--ds-text-3)">
            Ciclo de avaliação · 2026
          </Text>
          <Text fw={700} fz="xl">
            {avaliados} avaliações
          </Text>
          <Text fz="sm" c="var(--ds-text-2)">
            de {total} colaboradores — faltam 12 dias
          </Text>
        </Stack>
      </Group>
    </Card>
  );
}
