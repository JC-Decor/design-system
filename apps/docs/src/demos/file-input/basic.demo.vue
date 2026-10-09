<script lang="ts">
export const meta = { centered: true, maxWidth: 420 };
</script>

<script setup lang="ts">
import { FileInput } from '@jcdecor/vue';
import { IconPhoto } from '@tabler/icons-vue';
</script>

<template>
  <FileInput
    label="Foto do ambiente"
    description="JPG ou PNG, até 10 MB"
    placeholder="Escolher imagem"
    accept="image/png,image/jpeg"
    clearable
  >
    <template #leftSection><IconPhoto :size="16" /></template>
  </FileInput>
</template>
