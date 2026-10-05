<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { ref } from 'vue';
import { ColorPicker, Stack, Text } from '@jcdecor/vue';

const value = ref('#8B6F4E');
</script>

<template>
  <Stack align="center" gap="sm">
    <ColorPicker v-model="value" />
    <Text fz="sm" c="var(--ds-text-2)">
      Cor do tecido: <b>{{ value }}</b>
    </Text>
  </Stack>
</template>
