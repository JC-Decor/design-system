<script setup lang="ts">
import { ref } from 'vue';
import {
  ChatComposer,
  ChatHeader,
  ChatLayout,
  ChatThread,
  type ChatComposerSendPayload,
  type ChatMessageData,
  type ChatUser,
} from '@jcdecor/vue/chat';

const minutesAgo = (minutes: number) => new Date(Date.now() - minutes * 60_000);

const users: ChatUser[] = [
  { id: 'cliente', name: 'Você' },
  { id: 'ana', name: 'Ana · Atendimento JC Decor', avatar: 'https://i.pravatar.cc/80?img=47' },
];

const messages = ref<ChatMessageData[]>([
  {
    id: '1',
    authorId: 'ana',
    text: 'Olá! Sou a Ana, da JC Decor. Como posso ajudar?',
    createdAt: minutesAgo(3),
  },
]);

function handleSend({ text }: ChatComposerSendPayload) {
  messages.value.push({
    id: String(messages.value.length + 1),
    authorId: 'cliente',
    text,
    createdAt: new Date(),
    status: 'sent',
  });
}
</script>

<template>
  <ChatLayout :height="420">
    <template #header>
      <ChatHeader
        title="Ana · Atendimento JC Decor"
        subtitle="Responde em poucos minutos"
        :avatar="users[1].avatar"
        online
      />
    </template>

    <ChatThread :messages="messages" current-user-id="cliente" :users="users" />

    <template #composer>
      <ChatComposer @send="handleSend" />
    </template>
  </ChatLayout>
</template>
