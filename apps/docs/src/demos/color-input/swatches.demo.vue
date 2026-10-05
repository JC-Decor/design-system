<script lang="ts">
export const meta = { centered: true, maxWidth: 420 };
</script>

<script setup lang="ts">
import { ColorInput } from '@jcdecor/vue';

// Cores do catálogo de tecidos (dados de produto, não tokens do DS)
const tecidos = ['#F4EFE6', '#E5D3B3', '#C9A27E', '#8B6F4E', '#5B6B5A', '#2F3E46', '#7A8FA6', '#B5838D', '#6D597A', '#1F2228'];
</script>

<template>
  <ColorInput
    label="Cor da cortina"
    description="Somente cores disponíveis no catálogo"
    placeholder="Escolha uma cor"
    :with-picker="false"
    disallow-input
    :swatches="tecidos"
    :swatches-per-row="5"
    close-on-color-swatch-click
    default-value="#5B6B5A"
  />
</template>
