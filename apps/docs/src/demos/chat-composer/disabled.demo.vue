<script setup lang="ts">
import { Paper } from '@jcdecor/vue';
import { ChatComposer } from '@jcdecor/vue/chat';
</script>

<template>
  <Paper with-border radius="md" style="overflow: hidden">
    <ChatComposer disabled allow-attachments placeholder="Atendimento encerrado — abra um novo chamado" />
  </Paper>
</template>
