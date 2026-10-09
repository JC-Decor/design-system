<script setup lang="ts">
import { Group, ProgressLabel, ProgressRoot, ProgressSection, Stack, Text, Tooltip } from '@jcdecor/vue';

const categories = [
  { label: 'Pisos', value: 42, color: 'horizon' },
  { label: 'Papel de parede', value: 28, color: 'evergreen' },
  { label: 'Painéis', value: 18, color: 'electric' },
  { label: 'Outros', value: 12, color: 'gray' },
];
</script>

<template>
  <Stack gap="xs">
    <Text fz="sm" :fw="500">Vendas por categoria — setembro</Text>
    <ProgressRoot :size="24">
      <Tooltip v-for="category in categories" :key="category.label" :label="`${category.label}: ${category.value}%`">
        <ProgressSection :value="category.value" :color="category.color">
          <ProgressLabel>{{ category.value }}%</ProgressLabel>
        </ProgressSection>
      </Tooltip>
    </ProgressRoot>
    <Group gap="md">
      <Group v-for="category in categories" :key="category.label" :gap="6">
        <ProgressRoot :w="10" :size="10">
          <ProgressSection :value="100" :color="category.color" />
        </ProgressRoot>
        <Text fz="xs" c="var(--ds-text-2)">{{ category.label }}</Text>
      </Group>
    </Group>
  </Stack>
</template>
