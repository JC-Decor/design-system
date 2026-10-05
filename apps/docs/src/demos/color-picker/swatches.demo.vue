<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { Center, ColorPicker } from '@jcdecor/vue';

const tecidos = ['#F4EFE6', '#E5D3B3', '#C9A27E', '#8B6F4E', '#5B6B5A', '#2F3E46', '#7A8FA6', '#B5838D', '#6D597A', '#1F2228'];
</script>

<template>
  <Center>
    <ColorPicker format="hex" :swatches="tecidos" :swatches-per-row="5" default-value="#C9A27E" />
  </Center>
</template>
