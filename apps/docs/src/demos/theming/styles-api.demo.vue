<script setup lang="ts">
import { KpiCard, Group } from '@jcdecor/vue';
</script>

<template>
  <Group>
    <KpiCard label="Padrão" :value="1280" :delta="12.4" />
    <KpiCard
      label="Customizado"
      :value="1280"
      :delta="12.4"
      :styles="{
        root: { borderColor: 'var(--ds-primary)', background: 'var(--ds-primary-soft)' },
        value: { color: 'var(--ds-primary)' },
      }"
    />
  </Group>
</template>
