<script setup lang="ts">
import { ref } from 'vue';
import { Paper, Stack, Switch } from '@jcdecor/vue';
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
    text: 'Preciso de 2 rolos de papel de parede para uma parede de 3 m × 2,7 m?',
    createdAt: minutesAgo(4),
    status: 'read',
  },
  {
    id: '2',
    authorId: 'ana',
    text: 'Deixa eu calcular com a largura do rolo que você escolheu…',
    createdAt: minutesAgo(3),
  },
];

const typing = ref(true);
</script>

<template>
  <Stack>
    <Switch v-model="typing" label="Ana está digitando" />
    <Paper with-border :h="300" bg="var(--ds-bg)">
      <ChatThread :messages="messages" current-user-id="cliente" :users="users" :typing="typing ? ['Ana'] : []" />
    </Paper>
  </Stack>
</template>
