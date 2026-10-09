<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { Group, JcLogo } from '@jcdecor/vue';
</script>

<template>
  <Group :gap="48" align="center">
    <JcLogo type="full" :size="48" />
    <JcLogo type="mark" :size="48" />
    <JcLogo type="wordmark" :size="28" />
  </Group>
</template>
