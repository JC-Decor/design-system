<script setup lang="ts">
import { ref } from 'vue';
import { Paper, Stack, Text } from '@jcdecor/vue';
import { ChatComposer, formatBytes, type ChatComposerSendPayload } from '@jcdecor/vue/chat';

const last = ref<ChatComposerSendPayload | null>(null);
</script>

<template>
  <Stack>
    <Paper with-border radius="md" style="overflow: hidden">
      <ChatComposer
        allow-attachments
        accept="image/*,.pdf"
        placeholder="Envie a foto ou a planta do ambiente…"
        @send="last = $event"
      />
    </Paper>
    <Text v-if="last" fz="sm" c="var(--ds-text-2)">
      Enviado: “{{ last.text || 'sem texto' }}”
      <template v-if="last.files.length > 0">
        + {{ last.files.map((f) => `${f.name} (${formatBytes(f.size)})`).join(', ') }}
      </template>
    </Text>
  </Stack>
</template>
