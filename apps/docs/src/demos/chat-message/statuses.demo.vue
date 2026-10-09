<script setup lang="ts">
import { Stack } from '@jcdecor/vue';
import { ChatMessage } from '@jcdecor/vue/chat';

const at = (minute: number) => new Date(2026, 9, 2, 16, minute);
</script>

<template>
  <Stack gap="xs">
    <ChatMessage own :created-at="at(1)" status="sending">Enviando a foto da janela…</ChatMessage>
    <ChatMessage own :created-at="at(2)" status="sent">Medidas: 2,40 m × 2,60 m</ChatMessage>
    <ChatMessage own :created-at="at(3)" status="delivered">Pode ser na cor areia?</ChatMessage>
    <ChatMessage own :created-at="at(4)" status="read">Obrigada pelo orçamento!</ChatMessage>
    <ChatMessage own :created-at="at(5)" status="error">
      Não foi possível enviar. Toque para tentar de novo.
    </ChatMessage>
  </Stack>
</template>
