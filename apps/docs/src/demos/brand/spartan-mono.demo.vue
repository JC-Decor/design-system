<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
// Monocromático: mesma cor no traço e na crista, face transparente
import { Group, SpartanHelmet } from '@jcdecor/vue';

const colors = ['horizon.6', 'obsidian.6', 'evergreen.6', 'var(--ds-text)'];
</script>

<template>
  <Group gap="xl">
    <SpartanHelmet v-for="c in colors" :key="c" :size="72" :color="c" :crest-color="c" face-color="transparent" />
  </Group>
</template>
