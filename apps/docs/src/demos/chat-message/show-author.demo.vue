<script setup lang="ts">
import { Stack } from '@jcdecor/vue';
import { ChatMessage, type ChatUser } from '@jcdecor/vue/chat';

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
</script>

<template>
  <Stack :gap="2">
    <ChatMessage :author="ana" show-author position="first" :created-at="at(20)">
      Bruno, a cliente quer instalar o papel de parede no sábado.
    </ChatMessage>
    <ChatMessage :author="ana" show-author position="last" :created-at="at(20)">
      Você tem agenda?
    </ChatMessage>
    <ChatMessage :author="bruno" show-author :created-at="at(22)" mt="sm">
      Tenho às 9h ou às 14h.
    </ChatMessage>
    <ChatMessage own status="read" :created-at="at(23)" mt="sm">
      Às 9h fica perfeito!
    </ChatMessage>
  </Stack>
</template>
