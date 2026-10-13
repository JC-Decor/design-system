import { Group, SemiCircleProgress, Stack, Text } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

// Progresso das metas individuais no semestre
const pessoas = [
  { name: 'Ana', value: 104, color: 'green' },
  { name: 'Bruno', value: 78, color: 'navy' },
  { name: 'Carla', value: 41, color: 'coral' },
];

export default function Demo() {
  return (
    <Group gap="xl">
      {pessoas.map((pessoa) => (
        <Stack key={pessoa.name} align="center" gap={4}>
          <SemiCircleProgress
            value={Math.min(pessoa.value, 100)}
            size={140}
            thickness={12}
            filledSegmentColor={pessoa.color}
            label={`${pessoa.value}%`}
          />
          <Text fz="sm" c="var(--ds-text-2)">
            {pessoa.name}
          </Text>
        </Stack>
      ))}
    </Group>
  );
}
