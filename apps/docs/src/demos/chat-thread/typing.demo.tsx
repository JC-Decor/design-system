import { useState } from 'react';
import { Paper, Stack, Switch } from '@jcdecor/ui';
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
    text: 'Preciso de 2 rolos de papel de parede para uma parede de 3 m × 2,7 m?',
    createdAt: minutesAgo(4),
    status: 'read',
  },
  {
    id: '2',
    authorId: 'ana',
    text: 'Deixa eu calcular com a largura do rolo que você escolheu…',
    createdAt: minutesAgo(3),
  },
];

export default function Demo() {
  const [typing, setTyping] = useState(true);
  return (
    <Stack>
      <Switch
        label="Ana está digitando"
        checked={typing}
        onChange={(e) => setTyping(e.currentTarget.checked)}
      />
      <Paper withBorder h={300} bg="var(--ds-bg)">
        <ChatThread
          messages={messages}
          currentUserId="cliente"
          users={users}
          typing={typing ? ['Ana'] : []}
        />
      </Paper>
    </Stack>
  );
}
