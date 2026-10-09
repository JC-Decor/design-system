<script setup lang="ts">
import { Image, SimpleGrid } from '@jcdecor/vue';
</script>

<template>
  <SimpleGrid type="container" :cols="{ base: 1, '560px': 3 }" w="100%">
    <Image src="https://picsum.photos/seed/quarto/600/400" alt="Quarto com papel de parede" />
    <Image src="https://picsum.photos/seed/cozinha/600/400" alt="Cozinha com revestimento" />
    <Image src="https://picsum.photos/seed/varanda/600/400" alt="Varanda com grama sintética" />
  </SimpleGrid>
</template>
