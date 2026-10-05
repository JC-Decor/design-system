<script lang="ts">
export const meta = { centered: true, maxWidth: 320 };
</script>

<script setup lang="ts">
import { Paper, SemiCircleProgress, Stack, Text } from '@jcdecor/vue';
</script>

<template>
  <Paper with-border p="lg">
    <Stack align="center" gap="xs">
      <Text fz="sm" c="var(--ds-text-3)">Meta de vendas · loja Campinas</Text>
      <SemiCircleProgress :value="74" :size="220" :thickness="16" label-position="center" :transition-duration="250">
        <template #label>
          <Text component="span" :fw="700" fz="xl">74%</Text>
        </template>
      </SemiCircleProgress>
      <Text fz="sm" c="var(--ds-text-2)">R$ 184 mil de R$ 250 mil</Text>
    </Stack>
  </Paper>
</template>
