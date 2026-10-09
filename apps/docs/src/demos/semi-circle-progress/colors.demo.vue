<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { Group, SemiCircleProgress, Stack, Text } from '@jcdecor/vue';

const sellers = [
  { name: 'Ana', value: 104, color: 'evergreen' },
  { name: 'Bruno', value: 78, color: 'horizon' },
  { name: 'Carla', value: 41, color: 'danger' },
];
</script>

<template>
  <Group gap="xl">
    <Stack v-for="seller in sellers" :key="seller.name" align="center" :gap="4">
      <SemiCircleProgress
        :value="Math.min(seller.value, 100)"
        :size="140"
        :thickness="12"
        :filled-segment-color="seller.color"
        :label="`${seller.value}%`"
      />
      <Text fz="sm" c="var(--ds-text-2)">{{ seller.name }}</Text>
    </Stack>
  </Group>
</template>
