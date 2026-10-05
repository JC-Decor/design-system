<script setup lang="ts">
import { KpiCard, Group } from '@jcdecor/vue';
import { Sparkline } from '@jcdecor/vue/charts';
</script>

<template>
  <Group align="stretch">
    <KpiCard label="Sessões (7d)" :value="9812" :delta="4.3" :w="240">
      <template #chart>
        <Sparkline :data="[820, 940, 1100, 980, 1320, 1410, 1540]" />
      </template>
    </KpiCard>
    <KpiCard label="Carrinhos abandonados" :value="312" :delta="9.1" invert-delta :w="240">
      <template #chart>
        <Sparkline :data="[40, 38, 45, 50, 41, 47, 51]" color="danger.6" />
      </template>
    </KpiCard>
  </Group>
</template>
