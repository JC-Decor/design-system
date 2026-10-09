<script setup lang="ts">
import { Anchor, Paper } from '@jcdecor/vue';
import { ChatThread, type ChatMessageData, type ChatUser } from '@jcdecor/vue/chat';

const minutesAgo = (minutes: number) => new Date(Date.now() - minutes * 60_000);

const users: ChatUser[] = [
  { id: 'cliente', name: 'Você' },
  { id: 'ana', name: 'Ana · Atendimento JC Decor', avatar: 'https://i.pravatar.cc/80?img=47' },
];

const messages: ChatMessageData[] = [
  {
    id: '1',
    authorId: 'cliente',
    text: 'Qual o status do pedido #48213?',
    createdAt: minutesAgo(6),
    status: 'read',
  },
  {
    id: '2',
    authorId: 'ana',
    text: 'O pedido #48213 já foi entregue. O #48190 sai amanhã.',
    createdAt: minutesAgo(4),
  },
];

/** Separa o texto em trechos; "#48213" vira link para a página do pedido. */
const splitOrders = (text = '') => text.split(/(#\d{5})/g);
const isOrder = (part: string) => /^#\d{5}$/.test(part);
</script>

<template>
  <Paper with-border :h="240" bg="var(--ds-bg)">
    <ChatThread :messages="messages" current-user-id="cliente" :users="users">
      <template #content="{ message }">
        <template v-for="(part, index) in splitOrders(message.text)" :key="index">
          <Anchor v-if="isOrder(part)" :href="`#pedido-${part.slice(1)}`" :fw="600" c="inherit" underline="always">
            {{ part }}
          </Anchor>
          <template v-else>{{ part }}</template>
        </template>
      </template>
    </ChatThread>
  </Paper>
</template>
