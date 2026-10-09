<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { ColorPicker, Stack, Text } from '@jcdecor/vue';

const cores = [
  { nome: 'Linho cru', hex: '#E5D3B3' },
  { nome: 'Caramelo', hex: '#C9A27E' },
  { nome: 'Musgo', hex: '#5B6B5A' },
  { nome: 'Grafite', hex: '#2F3E46' },
  { nome: 'Azul névoa', hex: '#7A8FA6' },
];

const value = ref(cores[1].hex);
const selecionada = computed(() => cores.find((c) => c.hex.toLowerCase() === value.value.toLowerCase()));
</script>

<template>
  <Stack align="center" gap="xs">
    <ColorPicker
      v-model="value"
      :with-picker="false"
      :swatches="cores.map((c) => c.hex)"
      :swatches-per-row="5"
      aria-label="Cor do veludo"
    />
    <Text fz="sm" c="var(--ds-text-2)">
      Veludo · <b>{{ selecionada?.nome }}</b>
    </Text>
  </Stack>
</template>
