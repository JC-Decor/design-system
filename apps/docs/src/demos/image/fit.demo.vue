<script setup lang="ts">
import { Image, SimpleGrid, Text } from '@jcdecor/vue';

const foto = 'https://picsum.photos/seed/luminaria/400/600';
const fits = ['cover', 'contain'] as const;
</script>

<template>
  <SimpleGrid type="container" :cols="{ base: 1, '560px': 2 }" w="100%">
    <div v-for="fit in fits" :key="fit">
      <Image :src="foto" :h="200" :fit="fit" bg="var(--ds-surface-2)" alt="Luminária pendente" />
      <Text fz="sm" c="var(--ds-text-3)" mt="xs">fit="{{ fit }}"</Text>
    </div>
  </SimpleGrid>
</template>
