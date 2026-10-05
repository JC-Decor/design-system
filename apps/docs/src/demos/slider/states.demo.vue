<script lang="ts">
export const meta = { centered: true, maxWidth: 480 };
</script>

<script setup lang="ts">
import { Slider, Stack, Text } from '@jcdecor/vue';
</script>

<template>
  <Stack w="100%" gap="xl">
    <div>
      <Text fz="sm" c="var(--ds-text-2)" :mb="40">Label sempre visível</Text>
      <Slider :default-value="60" label-always-on :label="(v: number) => `${v}%`" thumb-label="Desconto progressivo" />
    </div>
    <div>
      <Text fz="sm" c="var(--ds-text-2)" mb="xs">Cor de sucesso</Text>
      <Slider :default-value="80" color="evergreen" thumb-label="Meta de vendas" />
    </div>
    <div>
      <Text fz="sm" c="var(--ds-text-2)" mb="xs">Desabilitado</Text>
      <Slider :default-value="40" disabled thumb-label="Desabilitado" />
    </div>
  </Stack>
</template>
