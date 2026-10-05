<script setup lang="ts">
import { SimpleGrid, TextInput } from '@jcdecor/vue';
import { IconAt, IconSearch, IconTicket } from '@tabler/icons-vue';
</script>

<template>
  <SimpleGrid type="container" :cols="{ base: 1, '560px': 3 }" w="100%">
    <TextInput label="Buscar" placeholder="Piso, cortina, papel…">
      <template #leftSection><IconSearch :size="16" /></template>
    </TextInput>
    <TextInput label="E-mail" placeholder="seu@email.com" type="email">
      <template #leftSection><IconAt :size="16" /></template>
    </TextInput>
    <TextInput label="Cupom" right-section="%" placeholder="JCDECOR10">
      <template #leftSection><IconTicket :size="16" /></template>
    </TextInput>
  </SimpleGrid>
</template>
