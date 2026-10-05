<script setup lang="ts">
import { Anchor, Breadcrumbs, Text } from '@jcdecor/vue';

const items = [
  { title: 'Início', href: '#' },
  { title: 'Pisos', href: '#pisos' },
];
</script>

<template>
  <Breadcrumbs>
    <Anchor v-for="item in items" :key="item.title" :href="item.href" fz="sm">{{ item.title }}</Anchor>
    <Text fz="sm" c="var(--ds-text-3)" aria-current="page">Vinílico</Text>
  </Breadcrumbs>
</template>
