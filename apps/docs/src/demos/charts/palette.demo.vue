<script setup lang="ts">
import { ColorSwatch, Group, Stack, Text } from '@jcdecor/vue';
import { chartPalette } from '@jcdecor/vue/charts';
</script>

<template>
  <Group gap="lg">
    <!-- chartPalette são variáveis CSS (var(--jc-chart-N)): servem direto em componentes HTML -->
    <Stack v-for="(color, index) in chartPalette" :key="color" :gap="6" align="center">
      <ColorSwatch :color="color" :size="44" radius="md" />
      <Text fz="xs" :fw="600">{{ index + 1 }}ª série</Text>
      <Text :fz="11" c="var(--ds-text-3)" ff="monospace">{{ color }}</Text>
    </Stack>
  </Group>
</template>
