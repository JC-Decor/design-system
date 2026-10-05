<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { Chip, Group } from '@jcdecor/vue';
</script>

<template>
  <Group justify="center">
    <Chip default-checked variant="filled">filled</Chip>
    <Chip default-checked variant="outline">outline (padrão)</Chip>
    <Chip default-checked variant="light">light</Chip>
    <Chip variant="outline">desmarcado</Chip>
    <Chip disabled>desabilitado</Chip>
  </Group>
</template>
