<script setup lang="ts">
import { ref } from 'vue';
import { Paper, Text } from '@jcdecor/vue';
import { ChatHeader } from '@jcdecor/vue/chat';

const clicks = ref(0);
</script>

<template>
  <Paper with-border radius="md" style="overflow: hidden">
    <ChatHeader
      title="Juliana Lima"
      subtitle="Cortinas sob medida"
      avatar="https://i.pravatar.cc/80?img=45"
      @back="clicks++"
    >
      <template #actions>
        <Text fz="xs" c="var(--ds-text-3)">voltar: {{ clicks }}</Text>
      </template>
    </ChatHeader>
  </Paper>
</template>
