<script setup lang="ts">
import { Badge, OverflowList, Paper, Text, Tooltip } from '@jcdecor/vue';

const tags = ['Sala de estar', 'Quarto', 'Escandinavo', 'Madeira', 'Freijó', 'Painel ripado', 'Iluminação LED', 'Home office', 'Sustentável', 'Fácil instalação', 'Antirriscos'];
</script>

<template>
  <Paper with-border p="md" w="100%" :maw="520" :style="{ resize: 'horizontal', overflow: 'hidden', minWidth: '200px' }">
    <Text fz="xs" c="var(--ds-text-3)" mb="xs">Arraste o canto para redimensionar</Text>
    <OverflowList :data="tags" :gap="6">
      <template #item="{ item: tag }">
        <Badge :key="tag" color="obsidian">{{ tag }}</Badge>
      </template>
      <template #overflow="{ items: ocultas }">
        <Tooltip :label="ocultas.join(', ')" multiline :w="220">
          <Badge variant="outline" color="obsidian" :style="{ cursor: 'default' }">+{{ ocultas.length }}</Badge>
        </Tooltip>
      </template>
    </OverflowList>
  </Paper>
</template>
