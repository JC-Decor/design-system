<script setup lang="ts">
import { computed, ref } from 'vue';
import { ActionIcon } from '@jcdecor/vue';
import { ChatComposer, ChatHeader, ChatLayout, ChatThread, ConversationList, type ChatMessageData, type ChatUser, type Conversation } from '@jcdecor/vue/chat';
import { IconPhone } from '@tabler/icons-vue';
import Demo from '../Demo.vue';
import Section from '../Section.vue';

const now = Date.now();
const min = 60 * 1000;
const users: ChatUser[] = [
  { id: 'eu', name: 'Você' },
  { id: 'bruno', name: 'Bruno · Instalação' },
];
const conversations = ref<Conversation[]>([
  { id: 'bruno', name: 'Bruno · Instalação', lastMessage: 'Chego às 14h 👍', lastMessageAt: now - 3 * min, unread: 2, online: true, tag: 'Pedido #1042' },
  { id: 'sac', name: 'SAC JC Decor', lastMessage: 'Seu reembolso foi aprovado.', lastMessageAt: now - 26 * 60 * min },
  { id: 'carla', name: 'Carla Dias', lastMessage: 'Obrigada!', lastMessageAt: now - 4 * 24 * 60 * min },
]);
const active = ref<string | null>('bruno');
const messages = ref<ChatMessageData[]>([
  { id: '1', authorId: 'bruno', text: 'Olá! Sou o Bruno, vou fazer a instalação das cortinas amanhã.', createdAt: now - 20 * min },
  { id: '2', authorId: 'bruno', text: 'Pode ser às 14h?', createdAt: now - 19 * min },
  { id: '3', authorId: 'eu', text: 'Perfeito, estarei em casa.', createdAt: now - 10 * min, status: 'read' },
  { id: '4', authorId: 'bruno', text: 'Chego às 14h 👍', createdAt: now - 3 * min },
]);
const draft = ref('');
const typing = ref<string[]>([]);
const activeConversation = computed(() => conversations.value.find((c) => c.id === active.value));

function send({ text }: { text: string; files: File[] }) {
  messages.value = [...messages.value, { id: String(Date.now()), authorId: 'eu', text, createdAt: Date.now(), status: 'sent' }];
  typing.value = ['Bruno'];
  setTimeout(() => {
    typing.value = [];
    messages.value = [...messages.value, { id: String(Date.now()), authorId: 'bruno', text: 'Combinado!', createdAt: Date.now() }];
  }, 1500);
}
</script>

<template>
  <Section id="chat" kicker="@jcdecor/vue/chat" title="Chat" description="ChatLayout com slots (sidebar, header, composer), ChatThread com agrupamento e auto-scroll, ChatComposer com v-model e @send.">
    <Demo>
      <ChatLayout :height="520">
        <template #sidebar>
          <ConversationList :conversations="conversations" :active-id="active" @select="(c: Conversation) => (active = c.id)" />
        </template>
        <template #header>
          <ChatHeader :title="activeConversation?.name ?? ''" subtitle="online agora" :avatar-name="activeConversation?.name" :online="activeConversation?.online">
            <template #actions><ActionIcon variant="subtle" aria-label="Ligar"><IconPhone :size="18" /></ActionIcon></template>
          </ChatHeader>
        </template>
        <ChatThread :messages="messages" current-user-id="eu" :users="users" :typing="typing" />
        <template #composer>
          <ChatComposer v-model="draft" allow-attachments @send="send" />
        </template>
      </ChatLayout>
    </Demo>
  </Section>
</template>
