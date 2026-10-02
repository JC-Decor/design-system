import { EmptyState, Paper } from '@jcdecor/ui';
import { ChatThread } from '@jcdecor/ui/chat';
import { IconMessageCircle } from '@tabler/icons-react';

export default function Demo() {
  return (
    <Paper withBorder h={260} bg="var(--ds-bg)">
      <ChatThread
        messages={[]}
        currentUserId="cliente"
        empty={
          <EmptyState
            py="xl"
            icon={<IconMessageCircle size={22} />}
            title="Nenhuma mensagem ainda"
            description="Envie sua dúvida sobre pisos, cortinas ou o status do seu pedido."
          />
        }
      />
    </Paper>
  );
}
