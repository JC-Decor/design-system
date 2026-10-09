<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { Group, JcLogoAlt } from '@jcdecor/vue';

const sizes = [16, 24, 32, 48, 64, 96];
</script>

<template>
  <Group gap="lg" align="flex-end">
    <JcLogoAlt v-for="size in sizes" :key="size" :size="size" stroke-color="none" />
  </Group>
</template>
