<script setup lang="ts">
// Prévia do playground: o estado dos controles chega como atributos e vai direto para o ActionIcon.
import { ActionIcon } from '@jcdecor/vue';
import { IconHeart } from '@tabler/icons-vue';
</script>

<template>
  <ActionIcon>
    <IconHeart :size="18" />
  </ActionIcon>
</template>
