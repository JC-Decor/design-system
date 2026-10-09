<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { Burger } from '@jcdecor/vue';
import { useDisclosure } from '@mantine-vue/hooks';

const [opened, { toggle }] = useDisclosure();
</script>

<template>
  <Burger :opened="opened" :aria-label="opened ? 'Fechar menu' : 'Abrir menu'" @click="toggle" />
</template>
