import { Button, Group, Paper, Stack, Tag } from '@jcdecor/ui';
import { ChatHeader } from '@jcdecor/ui/chat';

export default function Demo() {
  return (
    <Stack>
      <Paper withBorder radius="md" style={{ overflow: 'hidden' }}>
        <ChatHeader
          avatarName="Carlos Pereira"
          title={
            <Group gap={8}>
              Carlos Pereira
              <Tag tone="neutral" size="sm">
                Pedido #48213
              </Tag>
            </Group>
          }
          subtitle="Visto por último hoje às 09:14"
          actions={
            <Button size="xs" variant="light">
              Encerrar
            </Button>
          }
        />
      </Paper>
      <Paper withBorder radius="md" style={{ overflow: 'hidden' }}>
        <ChatHeader title="Grupo · Instalação Marina" subtitle="Marina, Ana, Bruno e Lucas" />
      </Paper>
    </Stack>
  );
}
