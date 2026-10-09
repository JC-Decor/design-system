import { useState } from 'react';
import {
  ChatComposer,
  ChatHeader,
  ChatLayout,
  ChatThread,
  type ChatMessageData,
  type ChatUser,
} from '@jcdecor/ui/chat';

const minutesAgo = (minutes: number) => new Date(Date.now() - minutes * 60_000);

const users: ChatUser[] = [
  { id: 'cliente', name: 'Você' },
  { id: 'ana', name: 'Ana · Atendimento JC Decor', avatar: 'https://i.pravatar.cc/80?img=47' },
];

export default function Demo() {
  const [messages, setMessages] = useState<ChatMessageData[]>([
    {
      id: '1',
      authorId: 'ana',
      text: 'Olá! Sou a Ana, da JC Decor. Como posso ajudar?',
      createdAt: minutesAgo(3),
    },
  ]);

  return (
    <ChatLayout
      height={420}
      header={
        <ChatHeader
          title="Ana · Atendimento JC Decor"
          subtitle="Responde em poucos minutos"
          avatar={users[1].avatar}
          online
        />
      }
      composer={
        <ChatComposer
          onSend={({ text }) =>
            setMessages((m) => [
              ...m,
              {
                id: String(m.length + 1),
                authorId: 'cliente',
                text,
                createdAt: new Date(),
                status: 'sent',
              },
            ])
          }
        />
      }
    >
      <ChatThread messages={messages} currentUserId="cliente" users={users} />
    </ChatLayout>
  );
}
