<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { CloseButton, Group } from '@jcdecor/vue';
import { IconX } from '@tabler/icons-vue';
</script>

<template>
  <Group>
    <CloseButton aria-label="Fechar" />
    <CloseButton aria-label="Fechar" variant="transparent" />
    <CloseButton aria-label="Fechar">
      <template #icon><IconX :size="18" stroke="1.5" /></template>
    </CloseButton>
    <CloseButton aria-label="Fechar" disabled />
  </Group>
</template>
