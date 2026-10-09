<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { Tag, Group, Stack, type TagTone } from '@jcdecor/vue';

const tones: TagTone[] = ['primary', 'success', 'warn', 'error', 'neutral'];
const variants = ['light', 'filled', 'outline', 'dot'] as const;
</script>

<template>
  <Stack>
    <Group v-for="variant in variants" :key="variant" justify="center">
      <Tag v-for="tone in tones" :key="tone" :tone="tone" :variant="variant">{{ variant }}</Tag>
    </Group>
  </Stack>
</template>
