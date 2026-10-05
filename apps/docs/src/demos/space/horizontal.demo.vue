<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { Button, Space } from '@jcdecor/vue';
</script>

<template>
  <div style="display: flex">
    <Button variant="outline">Salvar rascunho</Button>
    <Space w="xl" />
    <Button>Publicar produto</Button>
  </div>
</template>
