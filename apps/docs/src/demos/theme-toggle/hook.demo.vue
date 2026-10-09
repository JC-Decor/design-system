<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { ThemeToggle, Group, Text, useComputedColorScheme } from '@jcdecor/vue';

const scheme = useComputedColorScheme('light');
</script>

<template>
  <Group>
    <ThemeToggle variant="default" />
    <Text fz="sm" c="var(--ds-text-2)">
      Tema atual: <strong>{{ scheme === 'dark' ? 'escuro' : 'claro' }}</strong>
    </Text>
  </Group>
</template>
