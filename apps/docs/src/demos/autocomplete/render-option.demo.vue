<script lang="ts">
export const meta = { centered: true, maxWidth: 420 };
</script>

<script setup lang="ts">
import { Autocomplete, Group, Text, ThemeIcon } from '@jcdecor/vue';
import { IconGrid4x4, IconLayoutBoardSplit, IconPlant2, IconWallpaper } from '@tabler/icons-vue';

const produtos: Record<string, { icon: typeof IconGrid4x4; preco: string }> = {
  'Piso vinílico Carvalho': { icon: IconGrid4x4, preco: 'R$ 89,90/m²' },
  'Papel de parede Folhagens': { icon: IconWallpaper, preco: 'R$ 149,90/rolo' },
  'Painel ripado Freijó': { icon: IconLayoutBoardSplit, preco: 'R$ 219,00/un' },
  'Grama sintética Soft 25mm': { icon: IconPlant2, preco: 'R$ 59,90/m²' },
};
</script>

<template>
  <Autocomplete label="Produto" placeholder="Comece a digitar" :data="Object.keys(produtos)">
    <template #renderOption="{ option }">
      <Group gap="sm" wrap="nowrap" w="100%">
        <ThemeIcon variant="light" radius="sm">
          <component :is="produtos[option.value].icon" :size="16" />
        </ThemeIcon>
        <Text fz="sm" :style="{ flex: 1 }">{{ option.value }}</Text>
        <Text fz="xs" :fw="600" c="var(--ds-primary)">{{ produtos[option.value].preco }}</Text>
      </Group>
    </template>
  </Autocomplete>
</template>
