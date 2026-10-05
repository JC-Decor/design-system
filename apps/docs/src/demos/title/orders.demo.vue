<script setup lang="ts">
import { Stack, Title } from '@jcdecor/vue';

const niveis = [
  { order: 1, token: 'display-small · 40/32px · 700' },
  { order: 2, token: 'headline-large · 32/26px' },
  { order: 3, token: 'headline-medium · 24px' },
  { order: 4, token: 'headline-small · 20px' },
  { order: 5, token: '18px' },
  { order: 6, token: '16px' },
] as const;
</script>

<template>
  <Stack gap="sm">
    <Title v-for="{ order, token } in niveis" :key="order" :order="order">h{{ order }} · {{ token }}</Title>
  </Stack>
</template>
