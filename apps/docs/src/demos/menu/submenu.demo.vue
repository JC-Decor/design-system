<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import {
  ActionIcon,
  Menu,
  MenuDivider,
  MenuDropdown,
  MenuItem,
  MenuSub,
  MenuSubDropdown,
  MenuSubItem,
  MenuSubTarget,
  MenuTarget,
} from '@jcdecor/vue';
import { IconArchive, IconDots, IconEdit, IconFolder, IconTag, IconTrash } from '@tabler/icons-vue';

const collections = ['Outono 2026', 'Banheiro & Cozinha', 'Quarto infantil'];
</script>

<template>
  <Menu :width="220" position="bottom-start">
    <MenuTarget>
      <ActionIcon variant="default" size="lg" aria-label="Mais ações do produto">
        <IconDots :size="18" />
      </ActionIcon>
    </MenuTarget>
    <MenuDropdown>
      <MenuItem>
        <template #leftSection><IconEdit :size="16" /></template>
        Editar
      </MenuItem>
      <MenuSub>
        <MenuSubTarget>
          <MenuSubItem>
            <template #leftSection><IconFolder :size="16" /></template>
            Mover para coleção
          </MenuSubItem>
        </MenuSubTarget>
        <MenuSubDropdown>
          <MenuItem v-for="collection in collections" :key="collection">{{ collection }}</MenuItem>
        </MenuSubDropdown>
      </MenuSub>
      <MenuItem>
        <template #leftSection><IconTag :size="16" /></template>
        Aplicar desconto
      </MenuItem>
      <MenuDivider />
      <MenuItem>
        <template #leftSection><IconArchive :size="16" /></template>
        Arquivar
      </MenuItem>
      <MenuItem color="danger">
        <template #leftSection><IconTrash :size="16" /></template>
        Excluir
      </MenuItem>
    </MenuDropdown>
  </Menu>
</template>
