<script setup lang="ts">
import { KpiCard, Group } from '@jcdecor/vue';
</script>

<template>
  <Group align="stretch">
    <KpiCard label="Acessos (60d)" :value="54959" />
    <KpiCard label="Variação" value="-5,6%" :delta="-5.6" color-value />
    <KpiCard label="Pedidos" :value="1284" :delta="8.2" delta-label="vs. mês anterior" />
  </Group>
</template>
