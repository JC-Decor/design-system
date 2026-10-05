<script setup lang="ts">
import { KpiCard, Group } from '@jcdecor/vue';
</script>

<template>
  <Group>
    <KpiCard label="Acessos (60d)" :value="0" loading />
    <KpiCard label="Conversão" :value="0" loading />
  </Group>
</template>
