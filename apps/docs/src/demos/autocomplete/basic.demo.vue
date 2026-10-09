<script lang="ts">
export const meta = { centered: true, maxWidth: 420 };
</script>

<script setup lang="ts">
import { Autocomplete } from '@jcdecor/vue';
import { IconSearch } from '@tabler/icons-vue';

const sugestoes = ['Piso vinílico autocolante', 'Piso vinílico em régua', 'Papel de parede 3D', 'Papel de parede infantil', 'Painel ripado', 'Grama sintética 20mm', 'Cortina blackout', 'Tatame EVA', 'Carpete em placas'];
</script>

<template>
  <Autocomplete label="Buscar na loja" placeholder="O que você procura?" :data="sugestoes" :limit="5" clearable>
    <template #leftSection><IconSearch :size="18" /></template>
  </Autocomplete>
</template>
