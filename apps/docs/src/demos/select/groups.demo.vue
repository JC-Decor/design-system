<script lang="ts">
export const meta = { centered: true, maxWidth: 360 };
</script>

<script setup lang="ts">
import { Select } from '@jcdecor/vue';

const data = [
  { group: 'Pisos', items: ['Vinílico em régua', 'Vinílico autocolante', 'Laminado'] },
  { group: 'Paredes', items: ['Papel de parede', 'Painel ripado', 'Rodapé'] },
  { group: 'Decoração', items: ['Cortina blackout', 'Persiana rolô', 'Tapete'] },
];
</script>

<template>
  <Select label="Produto" placeholder="Escolha um produto" :data="data" searchable />
</template>
