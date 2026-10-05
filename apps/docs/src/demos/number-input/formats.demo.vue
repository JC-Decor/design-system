<script setup lang="ts">
import { NumberInput, SimpleGrid } from '@jcdecor/vue';
</script>

<template>
  <SimpleGrid type="container" :cols="{ base: 1, '560px': 3 }" w="100%">
    <NumberInput
      label="Área do ambiente"
      placeholder="0,00 m²"
      suffix=" m²"
      :decimal-scale="2"
      decimal-separator=","
      :min="0"
      :default-value="18.5"
    />
    <NumberInput
      label="Preço por m²"
      prefix="R$ "
      :decimal-scale="2"
      fixed-decimal-scale
      decimal-separator=","
      thousand-separator="."
      :default-value="1289.9"
    />
    <NumberInput
      label="Largura da cortina"
      suffix=" m"
      :decimal-scale="2"
      decimal-separator=","
      :step="0.1"
      :min="0.5"
      :max="8"
      :default-value="2.4"
    />
  </SimpleGrid>
</template>
