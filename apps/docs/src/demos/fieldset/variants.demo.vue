<script setup lang="ts">
import { Fieldset, SimpleGrid, TextInput } from '@jcdecor/vue';

const variants = ['default', 'filled', 'unstyled'] as const;
</script>

<template>
  <SimpleGrid type="container" :cols="{ base: 1, '720px': 3 }" w="100%">
    <Fieldset v-for="variant in variants" :key="variant" :legend="`Variante ${variant}`" :variant="variant">
      <TextInput label="CEP" placeholder="00000-000" />
    </Fieldset>
  </SimpleGrid>
</template>
