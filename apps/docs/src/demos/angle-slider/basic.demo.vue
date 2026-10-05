<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { ref } from 'vue';
import { AngleSlider, Stack, Text } from '@jcdecor/vue';

const value = ref(45);
</script>

<template>
  <Stack align="center" gap="xs">
    <AngleSlider v-model="value" aria-label="Ângulo de instalação" :size="96" :format-label="(v) => `${v}°`" />
    <Text fz="sm" c="var(--ds-text-2)">Paginação do piso em {{ value }}°</Text>
  </Stack>
</template>
