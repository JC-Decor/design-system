<script setup lang="ts">
import { SimpleGrid, Select } from '@jcdecor/vue';

const data = ['Pisos vinílicos', 'Papel de parede', 'Carpetes'];
</script>

<template>
  <SimpleGrid type="container" :cols="{ base: 1, '560px': 3 }">
    <Select label="Padrão" placeholder="Selecione" :data="data" description="Categoria principal" />
    <Select label="Com erro" placeholder="Selecione" :data="data" error="Escolha uma categoria" with-asterisk />
    <Select label="Desabilitado" placeholder="Selecione" :data="data" default-value="Carpetes" disabled />
  </SimpleGrid>
</template>
