<script lang="ts">
export const meta = { centered: true, maxWidth: 480 };
</script>

<script setup lang="ts">
import { RangeSlider, Stack, Text } from '@jcdecor/vue';
</script>

<template>
  <Stack w="100%" gap="xl">
    <div>
      <Text fz="sm" c="var(--ds-text-2)" :mb="40">Labels sempre visíveis · tamanho lg</Text>
      <RangeSlider
        size="lg"
        label-always-on
        :default-value="[20, 65]"
        :label="(v: number) => `${v}%`"
        :thumb-label="['Desconto mínimo', 'Desconto máximo']"
      />
    </div>
    <div>
      <Text fz="sm" c="var(--ds-text-2)" mb="xs">Desabilitado</Text>
      <RangeSlider disabled :default-value="[30, 70]" :thumb-label="['Mínimo', 'Máximo']" />
    </div>
  </Stack>
</template>
