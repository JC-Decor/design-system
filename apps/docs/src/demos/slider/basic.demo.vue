<script lang="ts">
export const meta = { centered: true, maxWidth: 480 };
</script>

<script setup lang="ts">
import { ref } from 'vue';
import { Group, Slider, Stack, Text } from '@jcdecor/vue';

const formatar = (v: number) => `${v.toFixed(2).replace('.', ',')} m`;

const largura = ref(2.4);
</script>

<template>
  <Stack w="100%" :gap="40">
    <Group justify="space-between">
      <Text fz="sm" :fw="500" c="var(--ds-text-2)">Largura da cortina</Text>
      <Text fz="sm" :fw="600">{{ formatar(largura) }}</Text>
    </Group>
    <Slider v-model="largura" :min="0.5" :max="6" :step="0.05" :label="formatar" thumb-label="Largura da cortina" />
  </Stack>
</template>
