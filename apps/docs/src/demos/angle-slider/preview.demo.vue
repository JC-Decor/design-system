<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { ref } from 'vue';
import { AngleSlider, Box, Group, Text } from '@jcdecor/vue';

const angle = ref(135);
</script>

<template>
  <Group gap="xl" align="center" justify="center">
    <AngleSlider v-model="angle" :size="88" :with-label="false" aria-label="Direção do degradê" />
    <div>
      <Box
        :w="200"
        :h="120"
        :style="{
          borderRadius: 'var(--ds-radius)',
          background: `linear-gradient(${angle}deg, var(--mantine-color-horizon-6), var(--mantine-color-obsidian-6))`,
        }"
      />
      <Text fz="sm" c="var(--ds-text-2)" mt="xs">Degradê do banner · {{ angle }}°</Text>
    </div>
  </Group>
</template>
