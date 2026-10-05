<script setup lang="ts">
import { ref } from 'vue';
import { Chip, ChipGroup, Group, Scroller } from '@jcdecor/vue';

const categorias = [
  'Pisos vinílicos', 'Pisos laminados', 'Papel de parede', 'Painel ripado', 'Grama sintética', 'Cortinas', 'Persianas',
  'Tatames', 'Carpetes', 'Rodapés', 'Tapetes', 'Adesivos de parede',
];

const categoria = ref('Pisos vinílicos');
</script>

<template>
  <Scroller w="100%" edge-gradient-color="var(--ds-surface)">
    <ChipGroup v-model="categoria">
      <Group gap="xs" wrap="nowrap">
        <Chip v-for="c in categorias" :key="c" :value="c" size="sm">{{ c }}</Chip>
      </Group>
    </ChipGroup>
  </Scroller>
</template>
