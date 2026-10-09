<script setup lang="ts">
import { Blockquote, Stack } from '@jcdecor/vue';
import { IconAlertTriangle, IconInfoCircle, IconLeaf } from '@tabler/icons-vue';
</script>

<template>
  <Stack gap="xl" w="100%" pt="sm">
    <Blockquote :icon-size="36">
      <template #icon><IconInfoCircle :size="20" /></template>
      Dica: compre 10% a mais de material para recortes e encaixe de estampa.
    </Blockquote>
    <Blockquote color="evergreen" :icon-size="36">
      <template #icon><IconLeaf :size="20" /></template>
      Este produto usa madeira de reflorestamento certificada FSC.
    </Blockquote>
    <Blockquote color="danger" :icon-size="36">
      <template #icon><IconAlertTriangle :size="20" /></template>
      Não recomendado para áreas externas ou molhadas.
    </Blockquote>
  </Stack>
</template>
