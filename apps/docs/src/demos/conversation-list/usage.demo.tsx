import { useState } from 'react';
import { Paper } from '@jcdecor/ui';
import { ConversationList, type Conversation } from '@jcdecor/ui/chat';

const minutesAgo = (minutes: number) => new Date(Date.now() - minutes * 60_000);

const initial: Conversation[] = [
  {
    id: '1',
    name: 'Marina Souza',
    avatar: 'https://i.pravatar.cc/80?img=32',
    online: true,
    lastMessage: 'São uns 18 m², mais ou menos.',
    lastMessageAt: minutesAgo(3),
    unread: 2,
    tag: 'Orçamento',
  },
  {
    id: '2',
    name: 'Carlos Pereira',
    online: true,
    lastMessage: 'Qual o prazo de entrega do pedido #48213?',
    lastMessageAt: minutesAgo(15),
    unread: 1,
    tag: 'Pedido #48213',
  },
  {
    id: '3',
    name: 'Juliana Lima',
    avatar: 'https://i.pravatar.cc/80?img=45',
    lastMessage: 'Largura 2,40 m e altura 2,60 m.',
    lastMessageAt: minutesAgo(120),
  },
  {
    id: '4',
    name: 'Roberto Alves',
    lastMessage: 'Você: Imagina, Roberto!',
    lastMessageAt: minutesAgo(60 * 26),
  },
  {
    id: '5',
    name: 'Fernanda Rocha',
    avatar: 'https://i.pravatar.cc/80?img=20',
    lastMessage: 'A grama sintética aguenta sol direto?',
    lastMessageAt: minutesAgo(60 * 24 * 4),
    unread: 12,
  },
];

export default function Demo() {
  const [conversations, setConversations] = useState(initial);
  const [activeId, setActiveId] = useState<string | null>('3');

  return (
    <Paper withBorder radius="md" h={440} maw={380} style={{ overflow: 'hidden' }}>
      <ConversationList
        conversations={conversations}
        activeId={activeId}
        onSelect={(c) => {
          setActiveId(c.id);
          setConversations((all) =>
            all.map((item) => (item.id === c.id ? { ...item, unread: 0 } : item)),
          );
        }}
      />
    </Paper>
  );
}
