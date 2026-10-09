<script lang="ts">
export const meta = { withoutPadding: true, background: 'page' };
</script>

<script setup lang="ts">
import { ref } from 'vue';
import {
  Box,
  Group,
  Kbd,
  MenuCheckboxGroup,
  MenuCheckboxItem,
  MenuDivider,
  MenuItem,
  MenuLabel,
  MenuRadioGroup,
  MenuRadioItem,
  Menubar,
  MenubarDropdown,
  MenubarMenu,
  MenubarTarget,
  Paper,
  Text,
} from '@jcdecor/vue';
import {
  IconArrowBackUp,
  IconArrowForwardUp,
  IconClipboard,
  IconCopy,
  IconDeviceFloppy,
  IconFileExport,
  IconFilePlus,
  IconFolderOpen,
  IconPrinter,
  IconScissors,
  IconTrash,
} from '@tabler/icons-vue';

const panels = ref(['sidebar', 'grid']);
const zoom = ref('100');
</script>

<template>
  <Box p="lg">
    <Paper with-border radius="md" :style="{ overflow: 'hidden' }">
      <Group px="xs" :py="6" gap="md" :style="{ borderBottom: '1px solid var(--ds-border-soft)' }">
        <Text :fw="700" fz="sm" px="xs" c="var(--ds-primary)">JC Painel</Text>
        <Menubar aria-label="Menu do editor de catálogo">
          <MenubarMenu :width="240">
            <MenubarTarget>Arquivo</MenubarTarget>
            <MenubarDropdown>
              <MenuItem>
                <template #leftSection><IconFilePlus :size="16" /></template>
                <template #rightSection><Kbd size="xs" :fw="500">⌘ N</Kbd></template>
                Novo catálogo
              </MenuItem>
              <MenuItem>
                <template #leftSection><IconFolderOpen :size="16" /></template>
                <template #rightSection><Kbd size="xs" :fw="500">⌘ O</Kbd></template>
                Abrir…
              </MenuItem>
              <MenuItem>
                <template #leftSection><IconDeviceFloppy :size="16" /></template>
                <template #rightSection><Kbd size="xs" :fw="500">⌘ S</Kbd></template>
                Salvar
              </MenuItem>
              <MenuDivider />
              <MenuItem>
                <template #leftSection><IconFileExport :size="16" /></template>
                Exportar PDF
              </MenuItem>
              <MenuItem>
                <template #leftSection><IconPrinter :size="16" /></template>
                <template #rightSection><Kbd size="xs" :fw="500">⌘ P</Kbd></template>
                Imprimir
              </MenuItem>
            </MenubarDropdown>
          </MenubarMenu>

          <MenubarMenu :width="240">
            <MenubarTarget>Editar</MenubarTarget>
            <MenubarDropdown>
              <MenuItem>
                <template #leftSection><IconArrowBackUp :size="16" /></template>
                <template #rightSection><Kbd size="xs" :fw="500">⌘ Z</Kbd></template>
                Desfazer
              </MenuItem>
              <MenuItem disabled>
                <template #leftSection><IconArrowForwardUp :size="16" /></template>
                <template #rightSection><Kbd size="xs" :fw="500">⇧ ⌘ Z</Kbd></template>
                Refazer
              </MenuItem>
              <MenuDivider />
              <MenuItem>
                <template #leftSection><IconScissors :size="16" /></template>
                <template #rightSection><Kbd size="xs" :fw="500">⌘ X</Kbd></template>
                Recortar
              </MenuItem>
              <MenuItem>
                <template #leftSection><IconCopy :size="16" /></template>
                <template #rightSection><Kbd size="xs" :fw="500">⌘ C</Kbd></template>
                Copiar
              </MenuItem>
              <MenuItem>
                <template #leftSection><IconClipboard :size="16" /></template>
                <template #rightSection><Kbd size="xs" :fw="500">⌘ V</Kbd></template>
                Colar
              </MenuItem>
              <MenuDivider />
              <MenuItem color="danger">
                <template #leftSection><IconTrash :size="16" /></template>
                Excluir seleção
              </MenuItem>
            </MenubarDropdown>
          </MenubarMenu>

          <MenubarMenu :width="220">
            <MenubarTarget>Exibir</MenubarTarget>
            <MenubarDropdown>
              <MenuLabel>Painéis</MenuLabel>
              <MenuCheckboxGroup v-model="panels">
                <MenuCheckboxItem value="sidebar">Barra lateral</MenuCheckboxItem>
                <MenuCheckboxItem value="grid">Grade de alinhamento</MenuCheckboxItem>
                <MenuCheckboxItem value="rulers">Réguas</MenuCheckboxItem>
              </MenuCheckboxGroup>
              <MenuDivider />
              <MenuLabel>Zoom</MenuLabel>
              <MenuRadioGroup v-model="zoom">
                <MenuRadioItem value="75">75%</MenuRadioItem>
                <MenuRadioItem value="100">100%</MenuRadioItem>
                <MenuRadioItem value="150">150%</MenuRadioItem>
              </MenuRadioGroup>
            </MenubarDropdown>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTarget disabled>Ajuda</MenubarTarget>
            <MenubarDropdown>
              <MenuItem>Central de ajuda</MenuItem>
            </MenubarDropdown>
          </MenubarMenu>
        </Menubar>
      </Group>
      <Box p="lg" bg="var(--ds-surface)">
        <Text fz="sm" c="var(--ds-text-3)">Catálogo Outono 2026 · zoom {{ zoom }}% · {{ panels.length }} painéis visíveis</Text>
      </Box>
    </Paper>
  </Box>
</template>
