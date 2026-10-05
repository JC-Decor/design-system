<script setup lang="ts">
import { Group, Progress, Stack, Text } from '@jcdecor/vue';

const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
</script>

<template>
  <Stack>
    <div>
      <Group justify="space-between" :mb="6">
        <Text fz="sm" :fw="500">Meta de vendas de outubro</Text>
        <Text fz="sm" c="var(--ds-text-3)">R$ 184 mil de R$ 250 mil</Text>
      </Group>
      <Progress :value="73.6" size="lg" aria-label="Meta de vendas" />
    </div>
    <div>
      <Text fz="sm" :fw="500" :mb="6">Importando catálogo (1.240 de 2.750 produtos)…</Text>
      <Progress :value="45" striped animated aria-label="Importação do catálogo" />
    </div>
    <Stack gap="xs">
      <Text fz="sm" :fw="500">Tamanhos</Text>
      <Progress v-for="size in sizes" :key="size" :value="60" :size="size" :aria-label="`Tamanho ${size}`" />
    </Stack>
  </Stack>
</template>
