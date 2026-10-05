<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { ColorSwatch, Group, Stack, Text } from '@jcdecor/vue';

const cores = ['horizon', 'obsidian', 'electric', 'evergreen', 'danger', 'gray'];
</script>

<template>
  <Group gap="lg">
    <Stack v-for="cor in cores" :key="cor" :gap="4" align="center">
      <ColorSwatch :color="`var(--mantine-color-${cor}-filled)`" :size="40" radius="md" />
      <Text fz="xs" c="var(--ds-text-3)">{{ cor }}</Text>
    </Stack>
  </Group>
</template>
