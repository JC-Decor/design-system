import { Stack } from '@jcdecor/ui';
import { ChatMessage } from '@jcdecor/ui/chat';

const at = (minute: number) => new Date(2026, 9, 2, 16, minute);

export default function Demo() {
  return (
    <Stack gap="xs">
      <ChatMessage own createdAt={at(1)} status="sending">
        Enviando a foto da janela…
      </ChatMessage>
      <ChatMessage own createdAt={at(2)} status="sent">
        Medidas: 2,40 m × 2,60 m
      </ChatMessage>
      <ChatMessage own createdAt={at(3)} status="delivered">
        Pode ser na cor areia?
      </ChatMessage>
      <ChatMessage own createdAt={at(4)} status="read">
        Obrigada pelo orçamento!
      </ChatMessage>
      <ChatMessage own createdAt={at(5)} status="error">
        Não foi possível enviar. Toque para tentar de novo.
      </ChatMessage>
    </Stack>
  );
}
