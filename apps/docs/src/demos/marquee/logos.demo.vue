<script setup lang="ts">
import { Marquee, Paper, Text } from '@jcdecor/vue';

const marcas = ['Durafloor', 'Tarkett', 'Eucafloor', 'Bobinex', 'Muresco', 'Santa Luzia', 'Quick-Step'];
</script>

<template>
  <Marquee gap="md" :duration="40000" fade-edge-color="var(--ds-surface)" w="100%">
    <Paper v-for="marca in marcas" :key="marca" with-border px="lg" py="sm">
      <Text :fw="600" c="var(--ds-text-2)" :style="{ whiteSpace: 'nowrap' }">{{ marca }}</Text>
    </Paper>
  </Marquee>
</template>
