<script setup lang="ts">
import { Divider, Stack } from '@jcdecor/vue';
import { IconSearch } from '@tabler/icons-vue';
</script>

<template>
  <Stack gap="lg" w="100%">
    <Divider label="ou continue com" label-position="center" />
    <Divider label="Itens do pedido" label-position="left" />
    <Divider label-position="right">
      <template #label>
        <IconSearch :size="12" />
        <span :style="{ marginLeft: '4px' }">Resultados relacionados</span>
      </template>
    </Divider>
  </Stack>
</template>
