<script setup lang="ts">
import { ColorInput, SimpleGrid } from '@jcdecor/vue';
</script>

<template>
  <SimpleGrid type="container" :cols="{ base: 1, '560px': 2 }" w="100%">
    <ColorInput label="HEX" format="hex" default-value="#2f3e46" />
    <ColorInput label="RGBA (com transparência)" format="rgba" default-value="rgba(201, 162, 126, 0.6)" />
    <ColorInput label="HSL" format="hsl" default-value="hsl(28, 40%, 64%)" />
    <ColorInput label="Com erro" default-value="#zzz" error="Informe uma cor HEX válida" />
  </SimpleGrid>
</template>
