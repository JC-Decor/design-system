<script lang="ts">
export const meta = { centered: true, maxWidth: 280 };
</script>

<script setup lang="ts">
import { Group, Image, Menu, MenuContextMenu, MenuDropdown, MenuItem, Paper, Stack, Text } from '@jcdecor/vue';
import { IconCopy, IconExternalLink, IconHeart, IconShare } from '@tabler/icons-vue';
</script>

<template>
  <Menu :width="220">
    <MenuContextMenu>
      <Paper with-border radius="md" p="sm">
        <Stack gap="xs">
          <Image src="https://picsum.photos/seed/folhagem/600/400" :h="140" radius="sm" alt="Papel de parede Folhagem" />
          <Group justify="space-between">
            <Text fz="sm" :fw="600">Papel de parede Folhagem</Text>
            <Text fz="sm" :fw="700" c="var(--ds-primary)">R$ 159,90</Text>
          </Group>
          <Text fz="xs" c="var(--ds-text-3)">Clique com o botão direito (ou toque e segure)</Text>
        </Stack>
      </Paper>
    </MenuContextMenu>
    <MenuDropdown>
      <MenuItem>
        <template #leftSection><IconExternalLink :size="16" /></template>
        Abrir em nova aba
      </MenuItem>
      <MenuItem>
        <template #leftSection><IconHeart :size="16" /></template>
        Favoritar
      </MenuItem>
      <MenuItem>
        <template #leftSection><IconShare :size="16" /></template>
        Compartilhar
      </MenuItem>
      <MenuItem>
        <template #leftSection><IconCopy :size="16" /></template>
        Copiar código do produto
      </MenuItem>
    </MenuDropdown>
  </Menu>
</template>
