<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { Box, Group, Indicator } from '@jcdecor/vue';

const posicoes = ['top-start', 'top-center', 'top-end', 'middle-end', 'bottom-end', 'bottom-start'] as const;
</script>

<template>
  <Group :gap="48">
    <Indicator v-for="position in posicoes" :key="position" :position="position" color="horizon" label="Novo" :size="18">
      <Box :w="72" :h="72" bg="var(--ds-surface-2)" bd="1px solid var(--ds-border-soft)" :style="{ borderRadius: 'var(--ds-radius-sm)' }" />
    </Indicator>
  </Group>
</template>
