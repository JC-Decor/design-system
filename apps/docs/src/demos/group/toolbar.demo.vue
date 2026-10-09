<script setup lang="ts">
import { Button, Group, TextInput } from '@jcdecor/vue';
import { IconFilter, IconPlus, IconSearch } from '@tabler/icons-vue';
</script>

<template>
  <Group justify="space-between" w="100%">
    <Group gap="sm">
      <TextInput placeholder="Buscar pedidos" aria-label="Buscar pedidos">
        <template #leftSection><IconSearch :size="16" /></template>
      </TextInput>
      <Button variant="outline">
        <template #leftSection><IconFilter :size="16" /></template>
        Filtros
      </Button>
    </Group>
    <Button>
      <template #leftSection><IconPlus :size="16" /></template>
      Novo pedido
    </Button>
  </Group>
</template>
