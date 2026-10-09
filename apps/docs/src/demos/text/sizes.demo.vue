<script setup lang="ts">
import { Stack, Text } from '@jcdecor/vue';

const tamanhos = [
  { size: 'xl', token: '20px · headline-small' },
  { size: 'lg', token: '18px · body-large' },
  { size: 'md', token: '16px · body (padrão)' },
  { size: 'sm', token: '14px · body-small' },
  { size: 'xs', token: '12px · caption' },
] as const;
</script>

<template>
  <Stack gap="sm">
    <Text v-for="{ size, token } in tamanhos" :key="size" :size="size">
      Piso vinílico Carvalho Natural
      <Text span size="xs" c="dimmed">{{ size }} · {{ token }}</Text>
    </Text>
  </Stack>
</template>
