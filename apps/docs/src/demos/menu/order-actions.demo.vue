<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { Button, Group, Kbd, Menu, MenuDivider, MenuDropdown, MenuItem, MenuLabel, MenuTarget } from '@jcdecor/vue';
import {
  IconChevronDown,
  IconCopy,
  IconEye,
  IconFileExport,
  IconPrinter,
  IconReceipt,
  IconTrash,
  IconTruck,
  IconX,
} from '@tabler/icons-vue';
</script>

<template>
  <Menu :width="260" position="bottom-start">
    <MenuTarget>
      <Button variant="outline">
        <template #rightSection><IconChevronDown :size="16" /></template>
        Ações do pedido
      </Button>
    </MenuTarget>
    <MenuDropdown>
      <MenuLabel>Pedido #10479</MenuLabel>
      <MenuItem>
        <template #leftSection><IconEye :size="16" /></template>
        <template #rightSection>
          <Group :gap="2" wrap="nowrap"><Kbd size="xs">⌘</Kbd><Kbd size="xs">O</Kbd></Group>
        </template>
        Ver detalhes
      </MenuItem>
      <MenuItem>
        <template #leftSection><IconTruck :size="16" /></template>
        Atualizar rastreio
      </MenuItem>
      <MenuItem>
        <template #leftSection><IconCopy :size="16" /></template>
        <template #rightSection>
          <Group :gap="2" wrap="nowrap"><Kbd size="xs">⌘</Kbd><Kbd size="xs">D</Kbd></Group>
        </template>
        Duplicar pedido
      </MenuItem>

      <MenuDivider />
      <MenuLabel>Documentos</MenuLabel>
      <MenuItem>
        <template #leftSection><IconReceipt :size="16" /></template>
        Emitir nota fiscal
      </MenuItem>
      <MenuItem>
        <template #leftSection><IconPrinter :size="16" /></template>
        <template #rightSection>
          <Group :gap="2" wrap="nowrap"><Kbd size="xs">⌘</Kbd><Kbd size="xs">P</Kbd></Group>
        </template>
        Imprimir etiqueta
      </MenuItem>
      <MenuItem disabled>
        <template #leftSection><IconFileExport :size="16" /></template>
        Exportar XML
      </MenuItem>

      <MenuDivider />
      <MenuItem>
        <template #leftSection><IconX :size="16" /></template>
        Cancelar pedido
      </MenuItem>
      <MenuItem color="danger">
        <template #leftSection><IconTrash :size="16" /></template>
        <template #rightSection>
          <Group :gap="2" wrap="nowrap"><Kbd size="xs">⌘</Kbd><Kbd size="xs">⌫</Kbd></Group>
        </template>
        Excluir pedido
      </MenuItem>
    </MenuDropdown>
  </Menu>
</template>
