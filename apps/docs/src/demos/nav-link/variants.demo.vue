<script setup lang="ts">
import { NavLink, SimpleGrid, Stack, Text } from '@jcdecor/vue';
import { IconShoppingBag } from '@tabler/icons-vue';

const variants = ['light', 'filled', 'subtle'] as const;
</script>

<template>
  <SimpleGrid type="container" :cols="{ base: 1, '560px': 3 }">
    <Stack v-for="variant in variants" :key="variant" :gap="4">
      <Text fz="xs" :fw="600" c="var(--ds-text-3)">variant="{{ variant }}"</Text>
      <NavLink href="#" label="Pedidos" :variant="variant" active>
        <template #leftSection><IconShoppingBag :size="18" /></template>
      </NavLink>
      <NavLink href="#" label="Clientes" :variant="variant" />
    </Stack>
  </SimpleGrid>
</template>
