<script lang="ts">
export const meta = { centered: true, maxWidth: 420 };
</script>

<script setup lang="ts">
import { MultiSelect } from '@jcdecor/vue';

const data = [
  { group: 'Ambiente', items: ['Sala', 'Quarto', 'Cozinha', 'Banheiro', 'Área externa'] },
  { group: 'Estilo', items: ['Moderno', 'Rústico', 'Escandinavo', 'Industrial'] },
];
</script>

<template>
  <MultiSelect label="Filtrar inspirações" placeholder="Ambiente e estilo" :data="data" :default-value="['Sala', 'Escandinavo']" searchable />
</template>
