<script lang="ts">
export const meta = { withoutPadding: true };
</script>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { TopNav, ThemeToggle, Avatar } from '@jcdecor/vue';

const pages = ['Painéis', 'Pedidos', 'Design System'];
const active = ref('Design System');

const links = computed(() =>
  pages.map((label) => ({
    label,
    active: label === active.value,
    onClick: () => (active.value = label),
  })),
);
</script>

<template>
  <TopNav brand="JC Decor" :links="links">
    <template #rightSection>
      <ThemeToggle color="gray.0" />
      <Avatar size="sm" color="electric" variant="filled">AP</Avatar>
    </template>
  </TopNav>
</template>
