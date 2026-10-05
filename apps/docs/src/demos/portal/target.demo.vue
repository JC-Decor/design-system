<script setup lang="ts">
import { ref } from 'vue';
import { Box, Paper, Portal, Stack, Text } from '@jcdecor/vue';

const target = ref<HTMLElement | null>(null);
const setTarget = (el: Element | null) => (target.value = el as HTMLElement | null);
</script>

<template>
  <Stack gap="md" w="100%">
    <Paper with-border p="md">
      <Text fz="sm" c="var(--ds-text-2)">Este bloco é declarado aqui…</Text>
      <Portal v-if="target" :target="target">
        <Text :fw="600" c="var(--ds-primary)">…mas aparece no destino abaixo.</Text>
      </Portal>
    </Paper>
    <Box :root-ref="setTarget" p="md" :style="{ border: '1px dashed var(--ds-primary)', borderRadius: 'var(--ds-radius-sm)' }" />
  </Stack>
</template>
