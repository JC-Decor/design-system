<script setup lang="ts">
import { Badge, Group, Stack, Text } from '@jcdecor/vue';

const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
</script>

<template>
  <Stack gap="md">
    <div v-for="size in sizes" :key="size">
      <Text fz="xs" c="var(--ds-text-3)" :mb="4">gap="{{ size }}"</Text>
      <Group :gap="size">
        <Badge size="lg">Pisos</Badge>
        <Badge size="lg">Tecidos</Badge>
        <Badge size="lg">Cortinas</Badge>
      </Group>
    </div>
  </Stack>
</template>
