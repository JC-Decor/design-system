<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { AngleSlider, Group } from '@jcdecor/vue';

const marks = [{ value: 0 }, { value: 45 }, { value: 90 }, { value: 135 }, { value: 180 }, { value: 225 }, { value: 270 }, { value: 315 }];

const formatLabel = (v: number) => `${v}°`;
</script>

<template>
  <Group gap="xl" justify="center">
    <AngleSlider aria-label="Ângulo livre" :default-value="90" :marks="marks" :size="100" :format-label="formatLabel" />
    <AngleSlider
      aria-label="Ângulo da espinha de peixe"
      :default-value="45"
      :marks="marks"
      restrict-to-marks
      :size="100"
      :format-label="formatLabel"
    />
    <AngleSlider aria-label="Desabilitado" :default-value="180" :size="100" disabled />
  </Group>
</template>
