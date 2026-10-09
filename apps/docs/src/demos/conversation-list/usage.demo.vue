<script setup lang="ts">
import { ref } from 'vue';
import { Paper } from '@jcdecor/vue';
import { ConversationList, type Conversation } from '@jcdecor/vue/chat';

const minutesAgo = (minutes: number) => new Date(Date.now() - minutes * 60_000);

const conversations = ref<Conversation[]>([
  {
    id: '1',
    name: 'Marina Souza',
    avatar: 'https://i.pravatar.cc/80?img=32',
    online: true,
    lastMessage: 'São uns 18 m², mais ou menos.',
    lastMessageAt: minutesAgo(3),
    unread: 2,
    tag: 'Orçamento',
  },
  {
    id: '2',
    name: 'Carlos Pereira',
    online: true,
    lastMessage: 'Qual o prazo de entrega do pedido #48213?',
    lastMessageAt: minutesAgo(15),
    unread: 1,
    tag: 'Pedido #48213',
  },
  {
    id: '3',
    name: 'Juliana Lima',
    avatar: 'https://i.pravatar.cc/80?img=45',
    lastMessage: 'Largura 2,40 m e altura 2,60 m.',
    lastMessageAt: minutesAgo(120),
  },
  {
    id: '4',
    name: 'Roberto Alves',
    lastMessage: 'Você: Imagina, Roberto!',
    lastMessageAt: minutesAgo(60 * 26),
  },
  {
    id: '5',
    name: 'Fernanda Rocha',
    avatar: 'https://i.pravatar.cc/80?img=20',
    lastMessage: 'A grama sintética aguenta sol direto?',
    lastMessageAt: minutesAgo(60 * 24 * 4),
    unread: 12,
  },
]);
const activeId = ref<string | null>('3');

function select(conversation: Conversation) {
  activeId.value = conversation.id;
  conversations.value = conversations.value.map((item) => (item.id === conversation.id ? { ...item, unread: 0 } : item));
}
</script>

<template>
  <Paper with-border radius="md" :h="440" :maw="380" style="overflow: hidden">
    <ConversationList :conversations="conversations" :active-id="activeId" @select="select" />
  </Paper>
</template>
