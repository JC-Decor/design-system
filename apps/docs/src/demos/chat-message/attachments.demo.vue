<script setup lang="ts">
import { Stack } from '@jcdecor/vue';
import { ChatMessage, type ChatUser } from '@jcdecor/vue/chat';

const ana: ChatUser = {
  id: 'ana',
  name: 'Ana · Atendimento JC Decor',
  avatar: 'https://i.pravatar.cc/80?img=47',
};
</script>

<template>
  <Stack gap="md">
    <ChatMessage
      own
      status="read"
      :created-at="new Date(2026, 9, 2, 10, 5)"
      :attachments="[
        {
          name: 'janela-quarto.jpg',
          type: 'image',
          url: 'https://picsum.photos/seed/janela/600/400',
        },
      ]"
    >
      Essa é a janela do quarto, cabe uma cortina blackout?
    </ChatMessage>
    <ChatMessage
      :author="ana"
      :created-at="new Date(2026, 9, 2, 10, 9)"
      :attachments="[
        { name: 'orcamento-cortina-blackout.pdf', type: 'file', url: '#', size: 248_320 },
        { name: 'catalogo-tecidos-2026.pdf', type: 'file', url: '#', size: 3_460_000 },
      ]"
    >
      Cabe sim! Segue o orçamento e o catálogo de tecidos.
    </ChatMessage>
  </Stack>
</template>
