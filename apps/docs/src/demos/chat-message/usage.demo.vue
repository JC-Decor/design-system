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
    <ChatMessage :author="ana" :created-at="new Date(2026, 9, 2, 14, 30)">
      Olá! O piso vinílico em régua sai por R$ 89,90/m². Para 18 m² fica R$ 1.618,20.
    </ChatMessage>
    <ChatMessage own :created-at="new Date(2026, 9, 2, 14, 32)" status="read">
      Ótimo! Vocês fazem a instalação também?
    </ChatMessage>
  </Stack>
</template>
