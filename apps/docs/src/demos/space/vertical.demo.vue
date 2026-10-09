<script setup lang="ts">
import { Space, Text } from '@jcdecor/vue';
</script>

<template>
  <div>
    <Text :fw="600">Endereço de entrega</Text>
    <Text fz="sm" c="var(--ds-text-2)">Rua das Palmeiras, 120 — São Paulo/SP</Text>
    <Space h="lg" />
    <Text :fw="600">Prazo estimado</Text>
    <Text fz="sm" c="var(--ds-text-2)">3 a 5 dias úteis</Text>
  </div>
</template>
