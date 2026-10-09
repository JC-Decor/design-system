<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { ActionIcon, Group, type ActionIconVariant } from '@jcdecor/vue';
import { IconHeart } from '@tabler/icons-vue';

// `accent` é uma variante do tema JC (o tipo do Mantine Vue ainda não a inclui)
const variants = ['filled', 'outline', 'accent', 'subtle', 'light', 'default', 'transparent'] as ActionIconVariant[];
</script>

<template>
  <Group>
    <ActionIcon v-for="variant in variants" :key="variant" :variant="variant" :aria-label="`Favoritar (${variant})`">
      <IconHeart :size="18" />
    </ActionIcon>
  </Group>
</template>
