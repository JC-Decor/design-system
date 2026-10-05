<script lang="ts">
export const meta = { centered: true, maxWidth: 420 };
</script>

<script setup lang="ts">
import { Autocomplete } from '@jcdecor/vue';

const data = [
  { group: 'Buscas recentes', items: ['Rodapé branco', 'Cola para papel de parede'] },
  { group: 'Mais buscados', items: ['Piso vinílico', 'Painel ripado', 'Grama sintética'] },
];
</script>

<template>
  <Autocomplete label="Buscar" placeholder="Digite um produto" :data="data" />
</template>
