<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { ref } from 'vue';
import { Button, Drawer, Group, Text } from '@jcdecor/vue';

type Position = 'left' | 'right' | 'top' | 'bottom';

const labels: Record<Position, string> = { left: 'Esquerda', right: 'Direita', top: 'Topo', bottom: 'Base' };
const positions = Object.keys(labels) as Position[];

const position = ref<Position | null>(null);
</script>

<template>
  <Drawer
    :opened="position !== null"
    :position="position ?? 'left'"
    :size="position === 'top' || position === 'bottom' ? 'xs' : 'sm'"
    :title="`Drawer — ${labels[position ?? 'left']}`"
    @close="position = null"
  >
    <Text fz="sm" c="var(--ds-text-2)">Laterais para filtros e carrinho; base para ações rápidas no mobile (bottom sheet).</Text>
  </Drawer>

  <Group justify="center">
    <Button v-for="value in positions" :key="value" variant="outline" @click="position = value">{{ labels[value] }}</Button>
  </Group>
</template>
