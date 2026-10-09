<script setup lang="ts">
import { Chip, Flex } from '@jcdecor/vue';

const filtros = ['Pisos vinílicos', 'Papel de parede', 'Painel ripado', 'Grama sintética', 'Cortinas', 'Tatames', 'Carpetes', 'Rodapés'];
</script>

<template>
  <Flex wrap="wrap" gap="xs" :maw="420">
    <Chip v-for="(filtro, index) in filtros" :key="filtro" :default-checked="index < 2" size="sm">
      {{ filtro }}
    </Chip>
  </Flex>
</template>
