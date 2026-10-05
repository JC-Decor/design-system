<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { Button, ComboboxPopover, ComboboxPopoverTarget } from '@jcdecor/vue';
import { IconArrowsSort } from '@tabler/icons-vue';

const ordenacoes = [
  { value: 'relevancia', label: 'Mais relevantes' },
  { value: 'vendidos', label: 'Mais vendidos' },
  { value: 'menor-preco', label: 'Menor preço' },
  { value: 'maior-preco', label: 'Maior preço' },
  { value: 'lancamentos', label: 'Lançamentos' },
];

const value = ref<string | null>('relevancia');
const label = computed(() => ordenacoes.find((item) => item.value === value.value)?.label ?? 'Ordenar');
</script>

<template>
  <ComboboxPopover v-model="value" :data="ordenacoes" :allow-deselect="false" :combobox-props="{ width: 220, position: 'bottom-start' }">
    <ComboboxPopoverTarget>
      <Button variant="outline">
        <template #leftSection><IconArrowsSort :size="16" /></template>
        {{ label }}
      </Button>
    </ComboboxPopoverTarget>
  </ComboboxPopover>
</template>
