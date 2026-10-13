import { Badge, Card, Group, Stack, Text, priorities } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { maxWidth: 480, centered: true };

// Prioridades do Connect: high → coral, med → yellow, low → green, info → blue
const tarefas = [
  { titulo: 'Aprovar férias de Bruno Carvalho', prazo: 'Vence hoje', prioridade: 'high' },
  { titulo: 'Revisar metas do 2º semestre', prazo: 'Até sexta', prioridade: 'med' },
  { titulo: 'Responder pesquisa de clima', prazo: 'Até 30/10', prioridade: 'low' },
  { titulo: 'Ler comunicado sobre o plano odontológico', prazo: 'Sem prazo', prioridade: 'info' },
] as const;

export default function Demo() {
  return (
    <Card padding={0}>
      <Stack gap={0}>
        {tarefas.map((t, i) => (
          <Group key={t.titulo} justify="space-between" wrap="nowrap" px="lg" py="sm" style={{ borderTop: i ? '1px solid var(--ds-border-soft)' : undefined }}>
            <div>
              <Text fz="sm" fw={600}>
                {t.titulo}
              </Text>
              <Text fz="xs" c="var(--ds-text-3)">
                {t.prazo}
              </Text>
            </div>
            <Badge color={priorities[t.prioridade].tone}>{priorities[t.prioridade].label}</Badge>
          </Group>
        ))}
      </Stack>
    </Card>
  );
}
