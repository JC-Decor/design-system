import { Anchor, Paper } from '@jcdecor/ui';
import { ChatThread, type ChatMessageData, type ChatUser } from '@jcdecor/ui/chat';

const minutesAgo = (minutes: number) => new Date(Date.now() - minutes * 60_000);

const users: ChatUser[] = [
  { id: 'cliente', name: 'Você' },
  { id: 'ana', name: 'Ana · Atendimento JC Decor', avatar: 'https://i.pravatar.cc/80?img=47' },
];

const messages: ChatMessageData[] = [
  {
    id: '1',
    authorId: 'cliente',
    text: 'Qual o status do pedido #48213?',
    createdAt: minutesAgo(6),
    status: 'read',
  },
  {
    id: '2',
    authorId: 'ana',
    text: 'O pedido #48213 já foi entregue. O #48190 sai amanhã.',
    createdAt: minutesAgo(4),
  },
];

/** Transforma "#48213" em link para a página do pedido. */
function linkOrders(text = '') {
  return text.split(/(#\d{5})/g).map((part, index) =>
    /^#\d{5}$/.test(part) ? (
      <Anchor key={index} href={`#pedido-${part.slice(1)}`} fw={600} c="inherit" underline="always">
        {part}
      </Anchor>
    ) : (
      part
    ),
  );
}

export default function Demo() {
  return (
    <Paper withBorder h={240} bg="var(--ds-bg)">
      <ChatThread
        messages={messages}
        currentUserId="cliente"
        users={users}
        renderContent={(m) => linkOrders(m.text)}
      />
    </Paper>
  );
}
