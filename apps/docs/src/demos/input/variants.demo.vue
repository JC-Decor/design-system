<script lang="ts">
export const meta = { centered: true, maxWidth: 420 };
</script>

<script setup lang="ts">
import { Input, Stack } from '@jcdecor/vue';
</script>

<template>
  <Stack w="100%">
    <Input variant="default" placeholder="default — borda (padrão)" aria-label="Variante default" />
    <Input variant="filled" placeholder="filled — fundo preenchido" aria-label="Variante filled" />
    <Input variant="unstyled" placeholder="unstyled — sem borda" aria-label="Variante unstyled" />
  </Stack>
</template>
