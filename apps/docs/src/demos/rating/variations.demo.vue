<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { Rating, Stack } from '@jcdecor/vue';
import { IconHeart, IconHeartFilled } from '@tabler/icons-vue';
</script>

<template>
  <Stack align="center">
    <Rating :default-value="2.5" :fractions="2" aria-label="Meia estrela" />
    <Rating :default-value="3" highlight-selected-only aria-label="Somente selecionada" />
    <Rating :default-value="4" color="danger" aria-label="Favoritos">
      <template #emptySymbol><IconHeart :size="22" color="var(--ds-text-3)" /></template>
      <template #fullSymbol><IconHeartFilled :size="22" color="var(--mantine-color-danger-filled)" /></template>
    </Rating>
    <Rating :default-value="3" :count="10" size="sm" aria-label="Nota de 0 a 10" />
  </Stack>
</template>
