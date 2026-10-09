import { useEffect, useRef, useState } from 'react';
import { ActionIcon, Group, Tooltip } from '@jcdecor/ui';
import {
  ChatComposer,
  ChatHeader,
  ChatLayout,
  ChatThread,
  ConversationList,
  type ChatComposerSendPayload,
  type ChatMessageData,
  type ChatUser,
  type Conversation,
} from '@jcdecor/ui/chat';
import { IconDotsVertical, IconPhone } from '@tabler/icons-react';

const minutesAgo = (minutes: number) => new Date(Date.now() - minutes * 60_000);
const uid = () => Math.random().toString(36).slice(2);

const me: ChatUser = {
  id: 'ana',
  name: 'Ana · Atendimento JC Decor',
  avatar: 'https://i.pravatar.cc/80?img=47',
};

const customers: (ChatUser & { online?: boolean; tag?: string })[] = [
  {
    id: 'marina',
    name: 'Marina Souza',
    avatar: 'https://i.pravatar.cc/80?img=32',
    online: true,
    tag: 'Orçamento',
  },
  { id: 'carlos', name: 'Carlos Pereira', online: true, tag: 'Pedido #48213' },
  { id: 'juliana', name: 'Juliana Lima', avatar: 'https://i.pravatar.cc/80?img=45' },
  { id: 'roberto', name: 'Roberto Alves' },
];

const initialMessages: Record<string, ChatMessageData[]> = {
  marina: [
    {
      id: 'm1',
      authorId: 'marina',
      text: 'Oi! Queria um orçamento de piso vinílico para a sala.',
      createdAt: minutesAgo(42),
    },
    {
      id: 'm2',
      authorId: 'marina',
      text: 'São uns 18 m², mais ou menos.',
      createdAt: minutesAgo(41),
    },
    {
      id: 'm3',
      authorId: 'ana',
      text: 'Olá, Marina! Claro. Você prefere o vinílico em régua ou em manta?',
      createdAt: minutesAgo(38),
      status: 'read',
    },
    {
      id: 'm4',
      authorId: 'marina',
      text: 'Em régua, num tom de madeira clara.',
      createdAt: minutesAgo(35),
    },
    {
      id: 'm5',
      authorId: 'marina',
      createdAt: minutesAgo(34),
      attachments: [
        { name: 'sala.jpg', type: 'image', url: 'https://picsum.photos/seed/sala/600/400' },
      ],
    },
  ],
  carlos: [
    {
      id: 'c1',
      authorId: 'carlos',
      text: 'Bom dia, qual o prazo de entrega do pedido #48213?',
      createdAt: minutesAgo(15),
    },
    { id: 'c2', authorId: 'carlos', text: 'Moro em Campinas.', createdAt: minutesAgo(14) },
  ],
  juliana: [
    {
      id: 'j1',
      authorId: 'juliana',
      text: 'Vocês fazem cortina sob medida?',
      createdAt: minutesAgo(60 * 3),
    },
    {
      id: 'j2',
      authorId: 'ana',
      text: 'Fazemos sim! Me passa a largura e a altura da janela?',
      createdAt: minutesAgo(60 * 3 - 5),
      status: 'read',
    },
    {
      id: 'j3',
      authorId: 'juliana',
      text: 'Largura 2,40 m e altura 2,60 m.',
      createdAt: minutesAgo(60 * 2),
    },
  ],
  roberto: [
    {
      id: 'r1',
      authorId: 'roberto',
      text: 'Obrigado pela ajuda com a grama sintética!',
      createdAt: minutesAgo(60 * 26),
    },
    {
      id: 'r2',
      authorId: 'ana',
      text: 'Imagina, Roberto! Qualquer coisa é só chamar.',
      createdAt: minutesAgo(60 * 26 - 3),
      status: 'read',
    },
  ],
};

const replies = [
  'Perfeito, obrigada!',
  'E vocês fazem a instalação também?',
  'Consigo pagar no Pix com desconto?',
  'Ótimo, fico no aguardo.',
];

export default function Demo() {
  const [activeId, setActiveId] = useState('marina');
  const [messages, setMessages] = useState(initialMessages);
  const [unread, setUnread] = useState<Record<string, number>>({ carlos: 2, juliana: 1 });
  const [typingIn, setTypingIn] = useState<string | null>(null);
  const [mobileView, setMobileView] = useState<'list' | 'thread'>('list');
  const activeRef = useRef(activeId);
  const timers = useRef<number[]>([]);
  const replyIndex = useRef(0);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);
  const later = (ms: number, fn: () => void) => timers.current.push(window.setTimeout(fn, ms));

  const customer = customers.find((c) => c.id === activeId)!;

  const conversations: Conversation[] = customers.map((c) => {
    const thread = messages[c.id];
    const last = thread[thread.length - 1];
    const preview = last.text ?? 'Imagem';
    return {
      id: c.id,
      name: c.name,
      avatar: c.avatar,
      online: c.online,
      tag: c.tag,
      unread: unread[c.id],
      lastMessage:
        typingIn === c.id ? 'digitando…' : last.authorId === me.id ? `Você: ${preview}` : preview,
      lastMessageAt: last.createdAt,
    };
  });

  const append = (conversationId: string, message: ChatMessageData) =>
    setMessages((all) => ({ ...all, [conversationId]: [...all[conversationId], message] }));

  const update = (conversationId: string, id: string, patch: Partial<ChatMessageData>) =>
    setMessages((all) => ({
      ...all,
      [conversationId]: all[conversationId].map((m) => (m.id === id ? { ...m, ...patch } : m)),
    }));

  const select = (conversation: Conversation) => {
    setActiveId(conversation.id);
    activeRef.current = conversation.id;
    setUnread((u) => ({ ...u, [conversation.id]: 0 }));
    setMobileView('thread');
  };

  const handleSend = ({ text, files }: ChatComposerSendPayload) => {
    const conversationId = activeId;
    const id = uid();
    append(conversationId, {
      id,
      authorId: me.id,
      text,
      createdAt: new Date(),
      status: 'sending',
      attachments: files.map((file) => ({
        name: file.name,
        size: file.size,
        type: file.type.startsWith('image/') ? 'image' : 'file',
        url: URL.createObjectURL(file),
      })),
    });

    later(900, () => update(conversationId, id, { status: 'read' }));
    later(1300, () => setTypingIn(conversationId));
    later(3200, () => {
      setTypingIn(null);
      append(conversationId, {
        id: uid(),
        authorId: conversationId,
        text: replies[replyIndex.current++ % replies.length],
        createdAt: new Date(),
      });
      if (activeRef.current !== conversationId) {
        setUnread((u) => ({ ...u, [conversationId]: (u[conversationId] ?? 0) + 1 }));
      }
    });
  };

  return (
    <ChatLayout
      height={600}
      mobileView={mobileView}
      sidebar={
        <ConversationList conversations={conversations} activeId={activeId} onSelect={select} />
      }
      header={
        <ChatHeader
          title={customer.name}
          subtitle={
            typingIn === activeId
              ? 'digitando…'
              : customer.online
              ? 'Online agora'
              : 'Visto por último hoje'
          }
          avatar={customer.avatar}
          avatarName={customer.name}
          online={customer.online}
          onBack={() => setMobileView('list')}
          actions={
            <Group gap={4}>
              <Tooltip label="Ligar">
                <ActionIcon variant="subtle" size="lg" aria-label="Ligar">
                  <IconPhone size={20} />
                </ActionIcon>
              </Tooltip>
              <ActionIcon variant="subtle" size="lg" aria-label="Mais opções">
                <IconDotsVertical size={20} />
              </ActionIcon>
            </Group>
          }
        />
      }
      composer={
        <ChatComposer
          onSend={handleSend}
          allowAttachments
          accept="image/*,.pdf"
          placeholder={`Responder ${customer.name.split(' ')[0]}…`}
        />
      }
    >
      <ChatThread
        key={activeId}
        messages={messages[activeId]}
        currentUserId={me.id}
        users={[me, ...customers]}
        typing={typingIn === activeId ? [customer.name.split(' ')[0]] : []}
      />
    </ChatLayout>
  );
}
