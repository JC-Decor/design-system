<script lang="ts">
export const meta = { centered: true, maxWidth: 420 };
</script>

<script setup lang="ts">
import { ColorInput } from '@jcdecor/vue';
</script>

<template>
  <ColorInput label="Cor do tecido" description="Digite o HEX ou escolha na paleta" placeholder="#000000" default-value="#C9A27E" />
</template>
