import { ActionIcon, Avatar, Group, Icon, Paper, Text } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

export default function Demo() {
  return (
    <Paper withBorder p="md" radius="lg">
      <Group justify="space-between" wrap="nowrap">
        <Group gap="sm" wrap="nowrap">
          <Avatar color="lavender" radius="xl">
            MS
          </Avatar>
          <div>
            <Text fw={600}>Marina Souza</Text>
            <Text fz="sm" c="var(--ds-text-3)">
              Analista de RH · Pessoas
            </Text>
          </div>
        </Group>
        <Group gap={6} wrap="nowrap">
          <ActionIcon aria-label="Enviar mensagem">
            <Icon name="chat" size={15} />
          </ActionIcon>
          <ActionIcon aria-label="Mais ações">
            <Icon name="dots-v" size={15} />
          </ActionIcon>
        </Group>
      </Group>
    </Paper>
  );
}
