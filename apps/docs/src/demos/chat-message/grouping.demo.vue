<script setup lang="ts">
import { Stack } from '@jcdecor/vue';
import { ChatMessage, type ChatUser } from '@jcdecor/vue/chat';

const carlos: ChatUser = { id: 'carlos', name: 'Carlos Pereira' };
const at = (minute: number) => new Date(2026, 9, 2, 9, minute);
</script>

<template>
  <Stack :gap="2">
    <ChatMessage :author="carlos" position="first" :created-at="at(10)">Bom dia!</ChatMessage>
    <ChatMessage :author="carlos" position="middle" :created-at="at(10)">
      Qual o prazo de entrega do pedido #48213?
    </ChatMessage>
    <ChatMessage :author="carlos" position="last" :created-at="at(11)">Moro em Campinas.</ChatMessage>

    <ChatMessage own position="first" :created-at="at(13)" status="delivered" mt="sm">
      Bom dia, Carlos!
    </ChatMessage>
    <ChatMessage own position="last" :created-at="at(13)" status="delivered">
      Para Campinas o prazo é de 3 a 5 dias úteis após a separação.
    </ChatMessage>
  </Stack>
</template>
