<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { Group, ThemeIcon } from '@jcdecor/vue';
import { IconTruckDelivery } from '@tabler/icons-vue';

const tamanhos = [
  { size: 'xs', icon: 12 },
  { size: 'sm', icon: 14 },
  { size: 'md', icon: 16 },
  { size: 'lg', icon: 20 },
  { size: 'xl', icon: 22 },
] as const;
</script>

<template>
  <Group align="center">
    <ThemeIcon v-for="{ size, icon } in tamanhos" :key="size" :size="size" variant="light">
      <IconTruckDelivery :size="icon" />
    </ThemeIcon>
  </Group>
</template>
