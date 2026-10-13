import { Avatar, Badge, Group, Icon, Menu, Paper, Stack, Text } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 300 };

export default function Demo() {
  return (
    <Menu width={220}>
      <Menu.ContextMenu>
        <Paper withBorder radius="lg" p="md">
          <Stack gap="sm">
            <Group gap="sm" wrap="nowrap">
              <Avatar radius="xl" bg="var(--cn-tone-green-bg)" c="var(--cn-tone-green-fg)">
                LA
              </Avatar>
              <div style={{ flex: 1 }}>
                <Text fz="sm" fw={600}>
                  Lucas Almeida
                </Text>
                <Text fz="xs" c="var(--ds-text-3)">
                  Logística · Supervisor
                </Text>
              </div>
              <Badge color="green" variant="light">
                Ativo
              </Badge>
            </Group>
            <Text fz="xs" c="var(--ds-text-3)">
              Clique com o botão direito (ou toque e segure)
            </Text>
          </Stack>
        </Paper>
      </Menu.ContextMenu>
      <Menu.Dropdown>
        <Menu.Item leftSection={<Icon name="eye" size={16} />}>Abrir perfil</Menu.Item>
        <Menu.Item leftSection={<Icon name="chat" size={16} />}>Enviar mensagem</Menu.Item>
        <Menu.Item leftSection={<Icon name="star" size={16} />}>Registrar feedback</Menu.Item>
        <Menu.Item leftSection={<Icon name="link" size={16} />}>Copiar link do perfil</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
