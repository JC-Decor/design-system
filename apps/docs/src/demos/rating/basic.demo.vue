<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { ref } from 'vue';
import { Rating, Stack, Text } from '@jcdecor/vue';

const legendas = ['', 'Muito ruim', 'Ruim', 'Regular', 'Bom', 'Excelente'];

const value = ref(4);
const symbolLabel = (i: number) => `${i + 1} de 5 estrelas`;
</script>

<template>
  <Stack align="center" gap="xs">
    <Text fz="sm" :fw="500" c="var(--ds-text-2)">Avalie o Piso vinílico Carvalho Natural</Text>
    <Rating v-model="value" size="lg" :get-symbol-label="symbolLabel" />
    <Text fz="sm" c="var(--ds-text-3)">{{ legendas[value] || 'Toque nas estrelas para avaliar' }}</Text>
  </Stack>
</template>
