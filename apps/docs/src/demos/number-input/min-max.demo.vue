<script setup lang="ts">
import { NumberInput, SimpleGrid } from '@jcdecor/vue';
</script>

<template>
  <SimpleGrid type="container" :cols="{ base: 1, '560px': 2 }" w="100%">
    <NumberInput
      label="Quantidade de caixas"
      description="Cada caixa cobre 2,2 m² · máximo de 20 por pedido"
      :min="1"
      :max="20"
      clamp-behavior="strict"
      :allow-decimal="false"
      :default-value="4"
    />
    <NumberInput label="Rolos de papel de parede" :min="1" :max="10" :default-value="12" error="Temos apenas 10 rolos em estoque" />
    <NumberInput label="Sem controles" hide-controls placeholder="Digite um valor" />
    <NumberInput label="Desabilitado" :default-value="3" disabled />
  </SimpleGrid>
</template>
