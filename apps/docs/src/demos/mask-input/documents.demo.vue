<script setup lang="ts">
import { MaskInput, SimpleGrid } from '@jcdecor/vue';
</script>

<template>
  <SimpleGrid type="container" :cols="{ base: 1, '560px': 2 }" w="100%">
    <MaskInput label="CEP" mask="99999-999" placeholder="00000-000" input-mode="numeric" />
    <MaskInput label="CPF" mask="999.999.999-99" placeholder="000.000.000-00" input-mode="numeric" />
    <MaskInput label="CNPJ" mask="99.999.999/9999-99" placeholder="00.000.000/0000-00" input-mode="numeric" />
    <MaskInput label="Data de nascimento" mask="99/99/9999" placeholder="dd/mm/aaaa" input-mode="numeric" />
  </SimpleGrid>
</template>
