<script setup lang="ts">
import { TokenSwatch, Group } from '@jcdecor/vue';
</script>

<template>
  <Group gap="sm">
    <TokenSwatch name="Horizon" value="#2663EB" css-var="--dc-horizon" />
    <TokenSwatch name="Electric" value="#F7D759" css-var="--dc-electric" />
    <TokenSwatch name="Evergreen" value="#1E8540" css-var="--dc-evergreen" />
    <TokenSwatch name="Obsidian" value="#08154B" css-var="--dc-obsidian" copy="cssVar" />
  </Group>
</template>
