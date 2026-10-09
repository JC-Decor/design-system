<script lang="ts">
export const meta = { centered: true, maxWidth: 360 };
</script>

<script setup lang="ts">
import { Button, Stack } from '@jcdecor/vue';
</script>

<template>
  <Stack gap="sm">
    <Button full-width>Finalizar compra</Button>
    <Button full-width variant="outline">Continuar comprando</Button>
  </Stack>
</template>
