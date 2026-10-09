<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { Button, Group } from '@jcdecor/vue';
</script>

<template>
  <Group>
    <Button>Ação primária</Button>
    <Button variant="outline">Secundária</Button>
    <Button variant="accent">Destaque</Button>
    <Button variant="subtle">Ghost</Button>
    <Button disabled>Desabilitado</Button>
    <Button size="sm">Pequeno</Button>
  </Group>
</template>
