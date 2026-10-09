<script setup lang="ts">
import { Stack, Text } from '@jcdecor/vue';

const sizes = ['xl', 'lg', 'md', 'sm', 'xs'] as const;
</script>

<template>
  <Stack gap="xs">
    <Text v-for="size in sizes" :key="size" :size="size">
      {{ size }} · Papel de parede vinílico lavável, ideal para salas e quartos.
    </Text>
  </Stack>
</template>
