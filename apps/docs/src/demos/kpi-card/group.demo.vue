<script setup lang="ts">
import { KpiCard, KpiGroup, formatCurrency } from '@jcdecor/vue';
import { IconCash, IconEye, IconReceipt, IconArrowBackUp } from '@tabler/icons-vue';
</script>

<template>
  <KpiGroup>
    <KpiCard label="Receita" :value="formatCurrency(184230)" :delta="12.4">
      <template #icon><IconCash :size="18" /></template>
    </KpiCard>
    <KpiCard label="Ticket médio" :value="formatCurrency(389.9)" :delta="2.1">
      <template #icon><IconReceipt :size="18" /></template>
    </KpiCard>
    <KpiCard label="Visitas" :value="54959" :delta="-5.6">
      <template #icon><IconEye :size="18" /></template>
    </KpiCard>
    <KpiCard label="Devoluções" value="1,8%" :delta="-0.4" invert-delta delta-label="queda é bom">
      <template #icon><IconArrowBackUp :size="18" /></template>
    </KpiCard>
  </KpiGroup>
</template>
