<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { Badge, Group } from '@jcdecor/vue';
</script>

<template>
  <Group justify="center">
    <Badge variant="light">Light</Badge>
    <Badge variant="filled">Filled</Badge>
    <Badge variant="outline">Outline</Badge>
    <Badge variant="dot">Dot</Badge>
    <Badge variant="default">Default</Badge>
    <Badge variant="gradient">Gradient</Badge>
  </Group>
</template>
