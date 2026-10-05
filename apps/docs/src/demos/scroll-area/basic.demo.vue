<script lang="ts">
export const meta = { centered: true, maxWidth: 420 };
</script>

<script setup lang="ts">
import { Group, Paper, ScrollArea, Text } from '@jcdecor/vue';

const pedidos = Array.from({ length: 14 }, (_, i) => ({
  id: `#${48213 - i}`,
  cliente: ['Mariana Souza', 'Carlos Lima', 'Ana Ribeiro', 'João Pereira', 'Beatriz Costa'][i % 5],
  total: `R$ ${(289 + i * 137).toLocaleString('pt-BR')},90`,
}));
</script>

<template>
  <Paper with-border w="100%">
    <ScrollArea :h="260" px="md">
      <Group v-for="p in pedidos" :key="p.id" justify="space-between" py="sm" :style="{ borderBottom: '1px solid var(--ds-border-soft)' }">
        <div>
          <Text fz="sm" :fw="600">{{ p.id }}</Text>
          <Text fz="xs" c="var(--ds-text-3)">{{ p.cliente }}</Text>
        </div>
        <Text fz="sm">{{ p.total }}</Text>
      </Group>
    </ScrollArea>
  </Paper>
</template>
