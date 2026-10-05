<script setup lang="ts">
import { Button, Group, Select, TextInput } from '@jcdecor/vue';
</script>

<template>
  <Group align="flex-end" gap="sm">
    <TextInput label="Nome do produto" placeholder="Ex.: Piso vinílico" :w="220" />
    <Select label="Categoria" :data="['Pisos', 'Tecidos', 'Cortinas']" default-value="Pisos" :allow-deselect="false" :w="160" />
    <Button>Buscar</Button>
  </Group>
</template>
