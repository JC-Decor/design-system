<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { Button, Group, Stack } from '@jcdecor/vue';

const colors = ['horizon', 'evergreen', 'obsidian', 'danger'];
const variants = ['filled', 'light', 'outline'] as const;
</script>

<template>
  <Stack>
    <Group v-for="variant in variants" :key="variant" justify="center">
      <Button v-for="color in colors" :key="color" :color="color" :variant="variant">{{ color }}</Button>
    </Group>
  </Stack>
</template>
