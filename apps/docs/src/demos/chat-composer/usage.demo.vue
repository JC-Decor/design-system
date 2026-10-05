<script setup lang="ts">
import { ref } from 'vue';
import { Paper, Stack, Text } from '@jcdecor/vue';
import { ChatComposer, type ChatComposerSendPayload } from '@jcdecor/vue/chat';

const sent = ref<string[]>([]);

function handleSend({ text }: ChatComposerSendPayload) {
  sent.value = [text, ...sent.value].slice(0, 3);
}
</script>

<template>
  <Stack>
    <Paper with-border radius="md" style="overflow: hidden">
      <ChatComposer @send="handleSend" />
    </Paper>
    <Text fz="sm" c="var(--ds-text-3)">
      {{ sent.length ? `Últimas enviadas: ${sent.join(' · ')}` : 'Enter envia, Shift+Enter quebra a linha.' }}
    </Text>
  </Stack>
</template>
