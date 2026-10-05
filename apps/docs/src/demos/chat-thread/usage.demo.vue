<script setup lang="ts">
import { Paper } from '@jcdecor/vue';
import { ChatThread, type ChatMessageData, type ChatUser } from '@jcdecor/vue/chat';

const minutesAgo = (minutes: number) => new Date(Date.now() - minutes * 60_000);
const DAY = 24 * 60;

const users: ChatUser[] = [
  { id: 'cliente', name: 'Você' },
  { id: 'ana', name: 'Ana · Atendimento JC Decor', avatar: 'https://i.pravatar.cc/80?img=47' },
];

const messages: ChatMessageData[] = [
  {
    id: '1',
    authorId: 'cliente',
    text: 'Oi, fiz o pedido #48213 ontem à noite.',
    createdAt: minutesAgo(DAY + 120),
    status: 'read',
  },
  {
    id: '2',
    authorId: 'cliente',
    text: 'Queria saber quando ele sai para entrega.',
    createdAt: minutesAgo(DAY + 119),
    status: 'read',
  },
  {
    id: '3',
    authorId: 'ana',
    text: 'Olá! Seu pedido está em separação no nosso centro de distribuição.',
    createdAt: minutesAgo(DAY + 100),
  },
  {
    id: '4',
    authorId: 'ana',
    text: 'Assim que for despachado você recebe o código de rastreio por e-mail.',
    createdAt: minutesAgo(DAY + 99),
  },
  {
    id: '5',
    authorId: 'ana',
    system: true,
    text: 'Pedido #48213 despachado',
    createdAt: minutesAgo(30),
  },
  {
    id: '6',
    authorId: 'ana',
    text: 'Bom dia! Seu pedido saiu para entrega hoje. Previsão: até 18h.',
    createdAt: minutesAgo(12),
  },
  {
    id: '7',
    authorId: 'cliente',
    text: 'Maravilha, obrigado!',
    createdAt: minutesAgo(2),
    status: 'read',
  },
];
</script>

<template>
  <Paper with-border :h="420" bg="var(--ds-bg)">
    <ChatThread :messages="messages" current-user-id="cliente" :users="users" />
  </Paper>
</template>
