<script setup lang="ts">
import { Alert, SimpleGrid } from '@jcdecor/vue';
import { IconInfoCircle } from '@tabler/icons-vue';

const variants = ['light', 'filled', 'outline', 'default', 'transparent'] as const;
</script>

<template>
  <SimpleGrid type="container" :cols="{ base: 1, '560px': 2 }">
    <Alert v-for="variant in variants" :key="variant" :variant="variant" color="horizon">
      <template #icon><IconInfoCircle /></template>
      <template #title>variant="{{ variant }}"</template>
      Frete grátis para o Sudeste acima de R$ 499.
    </Alert>
  </SimpleGrid>
</template>
