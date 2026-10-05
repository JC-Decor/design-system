<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { PriceTag, Group } from '@jcdecor/vue';

const sizes = ['sm', 'md', 'lg'] as const;
</script>

<template>
  <Group align="flex-end" gap="xl">
    <PriceTag v-for="size in sizes" :key="size" :size="size" :value="129.9" :old-value="159.9" unit="/rolo" />
  </Group>
</template>
