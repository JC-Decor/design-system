import { Group, PrioBadge, Stack } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

const tones = ['high', 'med', 'low', 'info'] as const;

export default function Demo() {
  return (
    <Stack align="center">
      <Group>{tones.map((tone) => <PrioBadge key={tone} tone={tone} />)}</Group>
      <Group>{tones.map((tone) => <PrioBadge key={tone} tone={tone} dot />)}</Group>
      <Group>
        <PrioBadge tone="high" dot>Desligamento urgente</PrioBadge>
        <PrioBadge tone="med">Férias vencendo</PrioBadge>
        <PrioBadge tone="low">Treinamento em dia</PrioBadge>
        <PrioBadge tone="info">Novo comunicado</PrioBadge>
      </Group>
    </Stack>
  );
}
