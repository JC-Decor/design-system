<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { Avatar, Group } from '@jcdecor/vue';
</script>

<template>
  <Group>
    <Avatar src="https://picsum.photos/seed/atendente/200/200" alt="Foto da atendente" size="lg" />
    <Avatar src="https://picsum.photos/seed/vendedor/200/200" alt="Foto do vendedor" size="lg" />
    <!-- Sem imagem (ou se ela falhar): mostra as iniciais do nome -->
    <Avatar :src="null" name="Elisa Prado" size="lg" color="initials" />
  </Group>
</template>
