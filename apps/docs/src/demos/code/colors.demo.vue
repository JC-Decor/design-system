<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { Code, Group } from '@jcdecor/vue';
</script>

<template>
  <Group>
    <Code>status: pendente</Code>
    <Code color="var(--ds-tag-primary-bg)" c="var(--ds-tag-primary-color)">status: enviado</Code>
    <Code color="var(--ds-tag-success-bg)" c="var(--ds-tag-success-color)">status: entregue</Code>
    <Code color="var(--ds-tag-error-bg)" c="var(--ds-tag-error-color)">status: cancelado</Code>
  </Group>
</template>
