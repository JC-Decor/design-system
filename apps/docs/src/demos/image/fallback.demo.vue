<script setup lang="ts">
import { Image, SimpleGrid, Text } from '@jcdecor/vue';

const FALLBACK = 'https://placehold.co/600x400/EAEFF7/6E7279?text=Imagem+indispon%C3%ADvel';
</script>

<template>
  <SimpleGrid type="container" :cols="{ base: 1, '560px': 2 }" w="100%">
    <div>
      <Image src="https://picsum.photos/seed/tapete/600/400" :fallback-src="FALLBACK" :h="180" alt="Tapete sisal" />
      <Text fz="sm" c="var(--ds-text-3)" mt="xs">Imagem carregada</Text>
    </div>
    <div>
      <Image :src="null" :fallback-src="FALLBACK" :h="180" alt="Produto sem foto" />
      <Text fz="sm" c="var(--ds-text-3)" mt="xs">Sem foto: usa fallbackSrc</Text>
    </div>
  </SimpleGrid>
</template>
