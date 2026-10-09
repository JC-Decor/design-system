<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { Avatar, Group } from '@jcdecor/vue';

const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
</script>

<template>
  <Group align="center">
    <Avatar v-for="size in sizes" :key="size" :size="size" name="Ana Ribeiro" />
  </Group>
</template>
