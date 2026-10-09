<script setup lang="ts">
import { Anchor, Breadcrumbs, Stack, Text } from '@jcdecor/vue';
import { IconChevronRight } from '@tabler/icons-vue';

const path = ['Início', 'Papel de parede', 'Botânica'];
</script>

<template>
  <Stack gap="md">
    <Breadcrumbs>
      <template #separator><IconChevronRight :size="14" /></template>
      <Anchor v-for="title in path" :key="title" href="#" fz="sm">{{ title }}</Anchor>
      <Text fz="sm" c="var(--ds-text-3)" aria-current="page">Folhagem Verde 0,53 × 10 m</Text>
    </Breadcrumbs>
    <Breadcrumbs separator="›" separator-margin="xs">
      <Anchor v-for="title in path" :key="title" href="#" fz="sm">{{ title }}</Anchor>
      <Text fz="sm" c="var(--ds-text-3)" aria-current="page">Folhagem Verde 0,53 × 10 m</Text>
    </Breadcrumbs>
    <Breadcrumbs separator="·" separator-margin="sm">
      <Anchor v-for="title in path" :key="title" href="#" fz="sm">{{ title }}</Anchor>
      <Text fz="sm" c="var(--ds-text-3)" aria-current="page">Folhagem Verde 0,53 × 10 m</Text>
    </Breadcrumbs>
  </Stack>
</template>
