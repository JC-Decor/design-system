<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { NumberFormatter, Stack, Text } from '@jcdecor/vue';
</script>

<template>
  <Stack :gap="4" align="center">
    <Text fz="sm" c="var(--ds-text-3)" td="line-through">
      <NumberFormatter :value="1599.9" prefix="R$ " thousand-separator="." decimal-separator="," :decimal-scale="2" fixed-decimal-scale />
    </Text>
    <Text fz="var(--type-headline-md)" :fw="700" c="var(--ds-primary)">
      <NumberFormatter :value="1249.9" prefix="R$ " thousand-separator="." decimal-separator="," :decimal-scale="2" fixed-decimal-scale />
    </Text>
    <Text fz="sm" c="var(--ds-text-2)">
      ou 10x de
      <NumberFormatter :value="124.99" prefix="R$ " thousand-separator="." decimal-separator="," :decimal-scale="2" fixed-decimal-scale />
      sem juros
    </Text>
  </Stack>
</template>
