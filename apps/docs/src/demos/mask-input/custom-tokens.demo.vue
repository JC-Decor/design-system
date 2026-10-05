<script setup lang="ts">
import { MaskInput, SimpleGrid } from '@jcdecor/vue';
</script>

<template>
  <SimpleGrid type="container" :cols="{ base: 1, '560px': 2 }" w="100%">
    <MaskInput
      label="Código do produto"
      description="Duas letras + 4 números (ex.: PV-0482)"
      mask="AA-9999"
      :transform="(char: string) => char.toUpperCase()"
      placeholder="PV-0000"
    />
    <MaskInput label="Cartão de crédito" mask="9999 9999 9999 9999" placeholder="0000 0000 0000 0000" input-mode="numeric" />
  </SimpleGrid>
</template>
