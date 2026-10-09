<script setup lang="ts">
import { ref } from 'vue';
import { PromoBanner, Button, Stack } from '@jcdecor/vue';

const opened = ref(true);
</script>

<template>
  <Stack gap="sm" align="flex-start">
    <PromoBanner v-model:opened="opened" variant="obsidian" radius="md" w="100%" with-close-button highlight="cupom: JCMAIO">
      5% OFF na 1ª compra
    </PromoBanner>
    <Button v-if="!opened" size="xs" variant="outline" @click="opened = true">Mostrar banner de novo</Button>
  </Stack>
</template>
