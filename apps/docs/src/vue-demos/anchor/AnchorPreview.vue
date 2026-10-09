<script setup lang="ts">
// Prévia do playground: o link não navega (equivale ao onClick com preventDefault da prévia React).
import { Anchor } from '@jcdecor/vue';

defineProps<{ children?: string }>();
</script>

<template>
  <Anchor href="#" @click.prevent>{{ children }}</Anchor>
</template>
