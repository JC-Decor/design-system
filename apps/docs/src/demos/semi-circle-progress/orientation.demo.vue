<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { Group, SemiCircleProgress } from '@jcdecor/vue';
</script>

<template>
  <Group gap="xl" align="center">
    <SemiCircleProgress :value="60" :size="160" label="Para cima" />
    <SemiCircleProgress :value="60" :size="160" orientation="down" label="Para baixo" />
    <SemiCircleProgress :value="60" :size="160" fill-direction="right-to-left" label="Direita → esquerda" />
  </Group>
</template>
