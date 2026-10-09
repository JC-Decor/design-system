<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { ref } from 'vue';
import { ActionIcon, Button, FloatingWindow, FloatingWindowResizeHandle, Group, Text, Textarea } from '@jcdecor/vue';
import { IconArrowsDiagonal2, IconNotes, IconX } from '@tabler/icons-vue';

const opened = ref(false);
</script>

<template>
  <Button variant="outline" @click="opened = !opened">
    <template #leftSection><IconNotes :size="18" /></template>
    {{ opened ? 'Fechar anotações' : 'Anotações do atendimento' }}
  </Button>

  <FloatingWindow
    v-if="opened"
    :p="0"
    :initial-position="{ bottom: 40, left: 40 }"
    :dimensions="{ initialWidth: 320, initialHeight: 240, minWidth: 260, minHeight: 180, maxWidth: 560, maxHeight: 480 }"
    drag-handle-selector=".drag-handle"
    exclude-drag-handle-selector="button"
    :style="{ display: 'flex', flexDirection: 'column' }"
  >
    <Group class="drag-handle" justify="space-between" px="sm" :py="6" :style="{ cursor: 'move', borderBottom: '1px solid var(--ds-border-soft)' }">
      <Text fz="sm" :fw="600">Pedido #10479 · Ana Ribeiro</Text>
      <ActionIcon variant="subtle" color="gray" size="sm" aria-label="Fechar" @click="opened = false">
        <IconX :size="16" />
      </ActionIcon>
    </Group>
    <Textarea
      variant="unstyled"
      placeholder="Anote o que o cliente pediu…"
      px="sm"
      py="xs"
      :style="{ flex: 1 }"
      :styles="{ wrapper: { height: '100%' }, input: { height: '100%', border: 0, background: 'transparent' } }"
      aria-label="Anotações"
    />
    <FloatingWindowResizeHandle
      aria-label="Redimensionar janela"
      pos="absolute"
      :right="4"
      :bottom="4"
      c="var(--ds-text-3)"
      :style="{ cursor: 'nwse-resize', display: 'flex' }"
    >
      <IconArrowsDiagonal2 :size="14" />
    </FloatingWindowResizeHandle>
  </FloatingWindow>
</template>
