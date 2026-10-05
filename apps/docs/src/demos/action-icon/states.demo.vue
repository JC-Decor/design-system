<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { ActionIcon, Group, Tooltip } from '@jcdecor/vue';
import { IconPencil, IconTrash, IconHeart } from '@tabler/icons-vue';
</script>

<template>
  <Group>
    <Tooltip label="Editar produto">
      <ActionIcon aria-label="Editar produto">
        <IconPencil :size="18" />
      </ActionIcon>
    </Tooltip>
    <Tooltip label="Excluir produto">
      <ActionIcon color="danger" aria-label="Excluir produto">
        <IconTrash :size="18" />
      </ActionIcon>
    </Tooltip>
    <ActionIcon variant="filled" loading aria-label="Salvando">
      <IconHeart :size="18" />
    </ActionIcon>
    <ActionIcon variant="filled" disabled aria-label="Favoritar (indisponível)">
      <IconHeart :size="18" />
    </ActionIcon>
  </Group>
</template>
