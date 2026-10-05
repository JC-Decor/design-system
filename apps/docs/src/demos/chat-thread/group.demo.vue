<script setup lang="ts">
import { Paper } from '@jcdecor/vue';
import { ChatThread, type ChatMessageData, type ChatUser } from '@jcdecor/vue/chat';

const minutesAgo = (minutes: number) => new Date(Date.now() - minutes * 60_000);

const users: ChatUser[] = [
  { id: 'marina', name: 'Marina Souza', avatar: 'https://i.pravatar.cc/80?img=32' },
  { id: 'ana', name: 'Ana · Atendimento', avatar: 'https://i.pravatar.cc/80?img=47' },
  { id: 'bruno', name: 'Bruno · Instalação', avatar: 'https://i.pravatar.cc/80?img=12' },
  { id: 'lucas', name: 'Lucas · Logística', avatar: 'https://i.pravatar.cc/80?img=59' },
];

const messages: ChatMessageData[] = [
  {
    id: '1',
    authorId: 'ana',
    system: true,
    text: 'Ana criou o grupo "Instalação — Marina"',
    createdAt: minutesAgo(40),
  },
  {
    id: '2',
    authorId: 'ana',
    text: 'Pessoal, a Marina comprou 18 m² de piso vinílico.',
    createdAt: minutesAgo(38),
  },
  {
    id: '3',
    authorId: 'ana',
    text: 'Precisamos combinar entrega e instalação.',
    createdAt: minutesAgo(37),
  },
  {
    id: '4',
    authorId: 'lucas',
    text: 'A entrega pode ser na quinta pela manhã.',
    createdAt: minutesAgo(30),
  },
  {
    id: '5',
    authorId: 'bruno',
    text: 'Consigo instalar na sexta, a partir das 9h.',
    createdAt: minutesAgo(25),
  },
  {
    id: '6',
    authorId: 'marina',
    text: 'Perfeito para mim! Obrigada a todos.',
    createdAt: minutesAgo(20),
    status: 'read',
  },
];
</script>

<template>
  <Paper with-border :h="420" bg="var(--ds-bg)">
    <ChatThread
      :messages="messages"
      current-user-id="marina"
      :users="users"
      show-authors
      :typing="['Bruno', 'Lucas']"
    />
  </Paper>
</template>
