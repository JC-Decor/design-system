<script lang="ts">
export const meta = { centered: true, maxWidth: 560 };
</script>

<script setup lang="ts">
import { Fieldset, SimpleGrid, TextInput } from '@jcdecor/vue';
</script>

<template>
  <Fieldset legend="Dados pessoais" w="100%">
    <SimpleGrid type="container" :cols="{ base: 1, '560px': 2 }">
      <TextInput label="Nome" placeholder="Maria" />
      <TextInput label="Sobrenome" placeholder="Souza" />
    </SimpleGrid>
    <TextInput label="E-mail" placeholder="maria@email.com" mt="md" />
  </Fieldset>
</template>
