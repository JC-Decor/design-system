<script setup lang="ts">
import { EmptyState, Paper } from '@jcdecor/vue';
import { ChatThread } from '@jcdecor/vue/chat';
import { IconMessageCircle } from '@tabler/icons-vue';
</script>

<template>
  <Paper with-border :h="260" bg="var(--ds-bg)">
    <ChatThread :messages="[]" current-user-id="cliente">
      <template #empty>
        <EmptyState
          py="xl"
          title="Nenhuma mensagem ainda"
          description="Envie sua dúvida sobre pisos, cortinas ou o status do seu pedido."
        >
          <template #icon><IconMessageCircle :size="22" /></template>
        </EmptyState>
      </template>
    </ChatThread>
  </Paper>
</template>
