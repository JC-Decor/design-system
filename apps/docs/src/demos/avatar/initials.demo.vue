<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { Avatar, Group } from '@jcdecor/vue';

const nomes = ['Ana Ribeiro', 'Bruno Carvalho', 'Carla Mendes', 'Diego Santos', 'Elisa Prado', 'Fábio Lima'];
</script>

<template>
  <Group>
    <Avatar v-for="nome in nomes" :key="nome" :name="nome" color="initials" />
  </Group>
</template>
