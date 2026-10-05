<script setup lang="ts">
import { SimpleGrid, TextInput } from '@jcdecor/vue';
</script>

<template>
  <SimpleGrid type="container" :cols="{ base: 1, '560px': 2 }" w="100%">
    <TextInput
      label="E-mail"
      description="Enviaremos a nota fiscal para este endereço"
      placeholder="voce@email.com"
      with-asterisk
    />
    <TextInput label="Nome completo" default-value="Ma" error="Informe nome e sobrenome" />
    <TextInput label="Código do pedido" default-value="#10482" disabled />
    <TextInput label="Loja de retirada" default-value="JC Decor · Moema" read-only />
  </SimpleGrid>
</template>
