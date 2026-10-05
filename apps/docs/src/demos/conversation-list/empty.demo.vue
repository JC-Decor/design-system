<script setup lang="ts">
import { Paper } from '@jcdecor/vue';
import { ConversationList } from '@jcdecor/vue/chat';
</script>

<template>
  <Paper with-border radius="md" :h="160" :maw="380" style="overflow: hidden">
    <ConversationList :conversations="[]" :searchable="false" empty="Nenhum atendimento aberto no momento" />
  </Paper>
</template>
