<script lang="ts">
export const meta = { centered: true, maxWidth: 360 };
</script>

<script setup lang="ts">
import { Select, Stack } from '@jcdecor/vue';
</script>

<template>
  <Stack>
    <Select
      label="Ordenar por"
      :data="['Mais vendidos', 'Menor preço', 'Maior preço', 'Lançamentos']"
      default-value="Mais vendidos"
      :allow-deselect="false"
    />
    <Select
      label="Cor"
      placeholder="Todas as cores"
      :data="['Carvalho natural', 'Nogueira', 'Cinza concreto', 'Branco polar']"
      default-value="Nogueira"
      clearable
    />
  </Stack>
</template>
