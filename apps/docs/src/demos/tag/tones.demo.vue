<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { Tag, Group } from '@jcdecor/vue';
</script>

<template>
  <Group>
    <Tag tone="success" with-icon>Sucesso</Tag>
    <Tag tone="warn" with-icon>Atenção</Tag>
    <Tag tone="error" with-icon>Erro</Tag>
    <Tag tone="primary">Info</Tag>
    <Tag tone="neutral">Neutro</Tag>
  </Group>
</template>
