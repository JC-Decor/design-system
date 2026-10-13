import { Group, HeaderAction, Popover, Stack, Text, ThemeToggle } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

const notificacoes = [
  { id: 1, titulo: 'Bruno Lima pediu 10 dias de férias', quando: 'há 5 min' },
  { id: 2, titulo: 'Avaliação de 45 dias de Carla Dias vence amanhã', quando: 'há 2 h' },
  { id: 3, titulo: 'Novo comunicado: Escala de fim de ano', quando: 'ontem' },
];

export default function Demo() {
  return (
    <Group gap={10} justify="center">
      <ThemeToggle />
      <Popover position="bottom-end" width={320} shadow="lg">
        <Popover.Target>
          <HeaderAction icon="bell" label="Notificações" badge={notificacoes.length} />
        </Popover.Target>
        <Popover.Dropdown p={0}>
          <Text fw={600} fz="sm" px="md" py="sm" style={{ borderBottom: '1px solid var(--ds-border-soft)' }}>
            Notificações
          </Text>
          <Stack gap={0}>
            {notificacoes.map((n) => (
              <div key={n.id} style={{ padding: '10px 14px', borderBottom: '1px solid var(--ds-border-soft)' }}>
                <Text fz="sm" fw={600}>
                  {n.titulo}
                </Text>
                <Text fz="xs" c="var(--ds-text-3)">
                  {n.quando}
                </Text>
              </div>
            ))}
          </Stack>
        </Popover.Dropdown>
      </Popover>
      <HeaderAction icon="chat" label="Mensagens" badge="9+" />
      <HeaderAction icon="calendar" label="Agenda" />
    </Group>
  );
}
