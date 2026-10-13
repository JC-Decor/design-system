import { Group, Progress, Rating, Stack, Text } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

const distribuicao = [
  { estrelas: 5, pct: 68 },
  { estrelas: 4, pct: 22 },
  { estrelas: 3, pct: 7 },
  { estrelas: 2, pct: 2 },
  { estrelas: 1, pct: 1 },
];

export default function Demo() {
  return (
    <Stack w="100%" gap="sm">
      <Group gap="sm" align="center">
        <Text fw={700} fz="var(--type-headline-md)">
          4,6
        </Text>
        <div>
          <Rating value={4.6} fractions={10} readOnly aria-label="Nota média 4,6 de 5" />
          <Text fz="xs" c="var(--ds-text-3)">
            Pesquisa de clima · 86 respostas
          </Text>
        </div>
      </Group>
      {distribuicao.map((d) => (
        <Group key={d.estrelas} gap="xs" wrap="nowrap">
          <Text fz="xs" w={72} c="var(--ds-text-2)" style={{ whiteSpace: 'nowrap' }}>
            {d.estrelas} {d.estrelas === 1 ? 'estrela' : 'estrelas'}
          </Text>
          <Progress value={d.pct} color="yellow.4" style={{ flex: 1 }} aria-label={`${d.pct}% das respostas com ${d.estrelas} de 5`} />
          <Text fz="xs" w={32} ta="right" c="var(--ds-text-3)">
            {d.pct}%
          </Text>
        </Group>
      ))}
    </Stack>
  );
}
