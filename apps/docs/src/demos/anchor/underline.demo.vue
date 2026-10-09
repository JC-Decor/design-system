<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { Anchor, Group } from '@jcdecor/vue';
</script>

<template>
  <Group gap="xl">
    <Anchor href="#" underline="hover">Sublinhado no hover</Anchor>
    <Anchor href="#" underline="always">Sempre sublinhado</Anchor>
    <Anchor href="#" underline="never">Nunca sublinhado</Anchor>
    <Anchor href="#" underline="not-hover">Some no hover</Anchor>
  </Group>
</template>
