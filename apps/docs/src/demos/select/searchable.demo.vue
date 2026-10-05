<script lang="ts">
export const meta = { centered: true, maxWidth: 360 };
</script>

<script setup lang="ts">
import { Select } from '@jcdecor/vue';

const categorias = ['Pisos vinílicos', 'Papel de parede', 'Painéis ripados', 'Grama sintética', 'Cortinas', 'Tatames', 'Carpetes'];
</script>

<template>
  <Select label="Categoria" placeholder="Busque uma categoria" :data="categorias" searchable nothing-found-message="Nenhuma categoria encontrada" />
</template>
