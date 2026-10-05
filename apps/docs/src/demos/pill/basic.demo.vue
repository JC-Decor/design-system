<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { Group, Pill } from '@jcdecor/vue';
</script>

<template>
  <Group>
    <Pill>Pisos vinílicos</Pill>
    <Pill>Papel de parede</Pill>
    <Pill variant="contrast">Painéis ripados</Pill>
    <Pill disabled>Esgotado</Pill>
  </Group>
</template>
