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
    <ChatMessage system>Ana entrou na conversa</ChatMessage>
    <ChatMessage :author="ana" :created-at="new Date(2026, 9, 2, 11, 0)">
      Oi! Vou assumir seu atendimento a partir de agora.
    </ChatMessage>
    <ChatMessage system>Atendimento transferido para o setor de Instalação</ChatMessage>
  </Stack>
</template>
