<script lang="ts">
export const meta = { maxWidth: 320, centered: true };
</script>

<script setup lang="ts">
import { h, ref } from 'vue';
import { Box, Image, LoadingOverlay, Stack, Switch, Text } from '@jcdecor/vue';

const visible = ref(true);

// Loader próprio: registrado em `loaders` e escolhido pelo `type`
const PreviewLoader = () =>
  h(Stack, { align: 'center', gap: 6 }, () => [
    h(Text, { fz: 'sm', fw: 600, c: 'var(--ds-text)' }, () => 'Gerando prévia 3D…'),
    h(Text, { fz: 'xs', c: 'var(--ds-text-3)' }, () => 'Isso leva alguns segundos'),
  ]);
</script>

<template>
  <Stack>
    <Box pos="relative" :style="{ borderRadius: 'var(--ds-radius)', overflow: 'hidden' }">
      <LoadingOverlay :visible="visible" :loader-props="{ type: 'preview', loaders: { preview: PreviewLoader } }" />
      <Image src="https://picsum.photos/seed/janela/600/400" :h="200" alt="Ambiente com cortina" />
    </Box>
    <Switch v-model="visible" label="Carregando" />
  </Stack>
</template>
