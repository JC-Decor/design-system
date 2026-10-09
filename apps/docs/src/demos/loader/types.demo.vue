<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { Group, Loader, Stack, Text } from '@jcdecor/vue';

const types = ['oval', 'dots', 'bars'] as const;
</script>

<template>
  <Group :gap="48">
    <Stack v-for="type in types" :key="type" align="center" gap="sm">
      <Loader :type="type" />
      <Text fz="xs" c="var(--ds-text-3)">{{ type }}</Text>
    </Stack>
  </Group>
</template>
