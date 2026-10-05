<script lang="ts">
export const meta = { centered: true, maxWidth: 420 };
</script>

<script setup lang="ts">
import { NativeSelect } from '@jcdecor/vue';
</script>

<template>
  <NativeSelect
    label="Estado"
    description="Usado para calcular o frete"
    default-value="São Paulo"
    :data="['São Paulo', 'Rio de Janeiro', 'Minas Gerais', 'Paraná', 'Santa Catarina', 'Rio Grande do Sul']"
  />
</template>
