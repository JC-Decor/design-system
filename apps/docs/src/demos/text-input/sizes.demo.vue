<script setup lang="ts">
import { Button, Group, Stack, TextInput } from '@jcdecor/vue';

const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
</script>

<template>
  <Stack w="100%">
    <Group v-for="size in sizes" :key="size" gap="sm" wrap="nowrap" align="flex-end">
      <TextInput :size="size" :placeholder="`Campo ${size}`" :aria-label="`Campo ${size}`" :style="{ flex: 1 }" />
      <Button :size="size">Buscar</Button>
    </Group>
  </Stack>
</template>
