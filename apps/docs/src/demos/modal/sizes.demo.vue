<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { ref } from 'vue';
import { Button, Group, Modal, Text } from '@jcdecor/vue';

const sizes = ['xs', 'sm', 'md', 'lg', 'xl', '70%'];

const size = ref<string | null>(null);
</script>

<template>
  <Modal :opened="size !== null" :title="`Modal ${size}`" :size="size ?? 'md'" @close="size = null">
    <Text fz="sm" c="var(--ds-text-2)">
      Use <code>sm</code> para confirmações, <code>md</code> (padrão) para formulários curtos e <code>lg</code>/<code>xl</code> para conteúdo
      com mais colunas. Valores em porcentagem ou px também funcionam.
    </Text>
  </Modal>

  <Group justify="center">
    <Button v-for="value in sizes" :key="value" variant="outline" @click="size = value">{{ value }}</Button>
  </Group>
</template>
