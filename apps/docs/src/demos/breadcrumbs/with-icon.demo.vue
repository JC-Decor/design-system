<script setup lang="ts">
import { Anchor, Breadcrumbs, Group, Text } from '@jcdecor/vue';
import { IconChevronRight, IconHome } from '@tabler/icons-vue';
</script>

<template>
  <Breadcrumbs>
    <template #separator><IconChevronRight :size="14" /></template>
    <Anchor href="#" fz="sm" aria-label="Início">
      <Group :gap="4" component="span">
        <IconHome :size="16" />
      </Group>
    </Anchor>
    <Anchor href="#" fz="sm">Painel</Anchor>
    <Anchor href="#" fz="sm">Pedidos</Anchor>
    <Text fz="sm" c="var(--ds-text-3)" aria-current="page">#10483</Text>
  </Breadcrumbs>
</template>
