<script lang="ts">
export const meta = { centered: true, maxWidth: 480 };
</script>

<script setup lang="ts">
import { ref } from 'vue';
import { FileInput, Pill, PillGroup, Stack, Text } from '@jcdecor/vue';
import { IconPaperclip } from '@tabler/icons-vue';

const files = ref<File[]>([]);
</script>

<template>
  <Stack w="100%" gap="xs">
    <FileInput
      v-model="files"
      label="Projeto e medidas"
      placeholder="Anexar PDFs ou imagens"
      multiple
      accept="application/pdf,image/*"
      clearable
    >
      <template #leftSection><IconPaperclip :size="16" /></template>
      <template #value="{ value }">
        <PillGroup v-if="value">
          <Pill v-for="file in [value].flat()" :key="file.name">{{ file.name }}</Pill>
        </PillGroup>
      </template>
    </FileInput>
    <Text fz="sm" c="var(--ds-text-3)">
      {{ files.length ? `${files.length} arquivo(s) selecionado(s)` : 'Nenhum arquivo anexado' }}
    </Text>
  </Stack>
</template>
