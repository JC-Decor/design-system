<script setup lang="ts">
import { computed, ref } from 'vue';
import { Button, Group, Paper, Stack, Text } from '@jcdecor/vue';
import { ChatComposer } from '@jcdecor/vue/chat';

const LIMIT = 280;

const value = ref('Olá! Gostaria de saber as medidas de cortina disponíveis.');
// v-model com limite: o setter corta o texto antes de guardar
const message = computed({
  get: () => value.value,
  set: (v: string) => (value.value = v.slice(0, LIMIT)),
});
</script>

<template>
  <Stack>
    <Paper with-border radius="md" style="overflow: hidden">
      <ChatComposer v-model="message" />
    </Paper>
    <Group justify="space-between">
      <Text fz="sm" :c="value.length >= LIMIT ? 'var(--ds-error)' : 'var(--ds-text-3)'">
        {{ value.length }}/{{ LIMIT }} caracteres
      </Text>
      <Button size="xs" variant="subtle" @click="value = ''">Limpar</Button>
    </Group>
  </Stack>
</template>
