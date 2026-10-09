import { Stack } from '@jcdecor/ui';
import { ChatMessage, type ChatUser } from '@jcdecor/ui/chat';

const ana: ChatUser = {
  id: 'ana',
  name: 'Ana · Atendimento JC Decor',
  avatar: 'https://i.pravatar.cc/80?img=47',
};

export default function Demo() {
  return (
    <Stack gap="md">
      <ChatMessage author={ana} createdAt={new Date(2026, 9, 2, 14, 30)}>
        Olá! O piso vinílico em régua sai por R$ 89,90/m². Para 18 m² fica R$ 1.618,20.
      </ChatMessage>
      <ChatMessage own createdAt={new Date(2026, 9, 2, 14, 32)} status="read">
        Ótimo! Vocês fazem a instalação também?
      </ChatMessage>
    </Stack>
  );
}
