<script setup lang="ts">
import { ColorRamp, Stack, Text } from '@jcdecor/vue';
import { ramps } from '@jcdecor/vue/tokens';

// Do mais escuro (900) ao mais claro (50)
const toSteps = (ramp: Record<number, string>) =>
  Object.entries(ramp)
    .sort(([a], [b]) => Number(b) - Number(a))
    .map(([label, value]) => ({ label, value }));
</script>

<template>
  <Stack gap="sm">
    <Text fz="xs" :fw="600" tt="uppercase" c="var(--ds-text-3)">Horizon</Text>
    <ColorRamp :steps="toSteps(ramps.horizon)" />
    <Text fz="xs" :fw="600" tt="uppercase" c="var(--ds-text-3)">Electric</Text>
    <ColorRamp :steps="toSteps(ramps.electric)" />
  </Stack>
</template>
