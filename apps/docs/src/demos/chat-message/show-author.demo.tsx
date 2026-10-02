import { Stack } from '@jcdecor/ui';
import { ChatMessage, type ChatUser } from '@jcdecor/ui/chat';

const ana: ChatUser = {
  id: 'ana',
  name: 'Ana · Atendimento',
  avatar: 'https://i.pravatar.cc/80?img=47',
};
const bruno: ChatUser = {
  id: 'bruno',
  name: 'Bruno · Instalação',
  avatar: 'https://i.pravatar.cc/80?img=12',
};
const at = (minute: number) => new Date(2026, 9, 2, 15, minute);

export default function Demo() {
  return (
    <Stack gap={2}>
      <ChatMessage author={ana} showAuthor position="first" createdAt={at(20)}>
        Bruno, a cliente quer instalar o papel de parede no sábado.
      </ChatMessage>
      <ChatMessage author={ana} showAuthor position="last" createdAt={at(20)}>
        Você tem agenda?
      </ChatMessage>
      <ChatMessage author={bruno} showAuthor createdAt={at(22)} mt="sm">
        Tenho às 9h ou às 14h.
      </ChatMessage>
      <ChatMessage own status="read" createdAt={at(23)} mt="sm">
        Às 9h fica perfeito!
      </ChatMessage>
    </Stack>
  );
}
