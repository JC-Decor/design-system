import { ProgressBar, Stack, Group, Text } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { maxWidth: 420, centered: true };

const metas = [
  { label: 'Treinamentos obrigatórios', value: 82, tone: 'green' },
  { label: 'Avaliações de desempenho', value: 64, tone: 'blue' },
  { label: 'Feedbacks 1:1', value: 40, tone: 'lavender' },
  { label: 'Documentos assinados', value: 28, tone: 'yellow' },
  { label: 'Exames periódicos', value: 12, tone: 'coral' },
  { label: 'Pesquisa de clima', value: 50, tone: 'ink' },
] as const;

export default function Demo() {
  return (
    <Stack gap="sm">
      {metas.map((m) => (
        <div key={m.label}>
          <Group justify="space-between" mb={4}>
            <Text fz="sm">{m.label}</Text>
            <Text fz="sm" fw={600}>{m.value}%</Text>
          </Group>
          <ProgressBar value={m.value} tone={m.tone} aria-label={m.label} />
        </div>
      ))}
    </Stack>
  );
}
