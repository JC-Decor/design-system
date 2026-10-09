<script lang="ts">
export const meta = { withoutPadding: true };
</script>

<script setup lang="ts">
// O TopNav já usa <JcLogo variant="dark" /> como marca padrão.
import { Avatar, Group, TopNav, ThemeToggle } from '@jcdecor/vue';

const links = [
  { label: 'Painéis', href: '#', active: true },
  { label: 'Pedidos', href: '#' },
  { label: 'Catálogo', href: '#' },
];
</script>

<template>
  <TopNav :links="links">
    <template #rightSection>
      <Group gap="xs">
        <ThemeToggle color="gray" />
        <Avatar name="Ana Souza" color="initials" :size="32" />
      </Group>
    </template>
  </TopNav>
</template>
