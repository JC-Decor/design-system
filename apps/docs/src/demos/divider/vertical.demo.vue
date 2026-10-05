<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { Anchor, Divider, Group } from '@jcdecor/vue';
</script>

<template>
  <Group gap="sm" fz="sm">
    <Anchor href="#">Minha conta</Anchor>
    <Divider orientation="vertical" />
    <Anchor href="#">Meus pedidos</Anchor>
    <Divider orientation="vertical" />
    <Anchor href="#">Central de ajuda</Anchor>
  </Group>
</template>
