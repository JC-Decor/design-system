<script setup lang="ts">
import { ref, watch } from 'vue';
import { Button, Group, Paper, Stack, Text } from '@jcdecor/vue';
import { ChatComposer } from '@jcdecor/vue/chat';

const LIMIT = 280;

const value = ref('Olá! Gostaria de saber as medidas de cortina disponíveis.');
// Corta o excedente depois que o campo renderiza, para o textarea voltar ao texto limitado
watch(value, (v) => {
  if (v.length > LIMIT) value.value = v.slice(0, LIMIT);
}, { flush: 'post' });
</script>

<template>
  <Stack>
    <Paper with-border radius="md" style="overflow: hidden">
      <ChatComposer v-model="value" />
    </Paper>
    <Group justify="space-between">
      <Text fz="sm" :c="value.length >= LIMIT ? 'var(--ds-error)' : 'var(--ds-text-3)'">
        {{ value.length }}/{{ LIMIT }} caracteres
      </Text>
      <Button size="xs" variant="subtle" @click="value = ''">Limpar</Button>
    </Group>
  </Stack>
</template>
