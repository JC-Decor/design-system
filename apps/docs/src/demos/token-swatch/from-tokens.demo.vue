<script setup lang="ts">
import { TokenSwatch, ColorRamp, Group, Stack } from '@jcdecor/vue';
import { brand, ramps } from '@jcdecor/vue/tokens';

const steps = Object.entries(ramps.evergreen)
  .sort(([a], [b]) => Number(b) - Number(a))
  .map(([label, value]) => ({ label, value }));
</script>

<template>
  <Stack>
    <Group gap="sm">
      <TokenSwatch v-for="(value, key) in brand" :key="key" :name="key" :value="value" :css-var="`--dc-${key}`" />
    </Group>
    <ColorRamp :steps="steps" />
  </Stack>
</template>
