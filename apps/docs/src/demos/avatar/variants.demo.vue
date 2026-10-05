<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { Avatar, Group } from '@jcdecor/vue';
import { IconUser } from '@tabler/icons-vue';
</script>

<template>
  <Group>
    <Avatar name="Ana Ribeiro" />
    <Avatar name="Bruno Carvalho" variant="filled" />
    <Avatar name="Carla Mendes" variant="outline" />
    <Avatar name="Diego Santos" color="evergreen" />
    <Avatar><IconUser :size="20" /></Avatar>
    <Avatar radius="sm" color="obsidian" variant="filled" name="JC Decor" />
  </Group>
</template>
