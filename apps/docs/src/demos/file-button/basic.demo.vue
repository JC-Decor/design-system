<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { ref } from 'vue';
import { Button, FileButton, Group, Text } from '@jcdecor/vue';
import { IconPhoto } from '@tabler/icons-vue';

const foto = ref<File | null>(null);
</script>

<template>
  <Group justify="center" gap="md">
    <FileButton v-model="foto" accept="image/png,image/jpeg,image/webp" v-slot="props">
      <Button v-bind="props">
        <template #leftSection><IconPhoto :size="18" /></template>
        Enviar foto do ambiente
      </Button>
    </FileButton>
    <Text fz="sm" c="var(--ds-text-2)">{{ foto ? `Selecionado: ${foto.name}` : 'Nenhuma foto selecionada' }}</Text>
  </Group>
</template>
