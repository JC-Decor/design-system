<script lang="ts">
export const meta = { withoutPadding: true };
</script>

<script setup lang="ts">
import { TopNav, Tag, Button } from '@jcdecor/vue';
import { IconLayoutDashboard } from '@tabler/icons-vue';

const links = [
  { label: 'Vendas', active: true, onClick: () => {} },
  { label: 'Estoque', onClick: () => {} },
  { label: 'Campanhas', onClick: () => {} },
];
</script>

<template>
  <TopNav :links="links">
    <template #brand>
      <IconLayoutDashboard :size="22" />
      JC Decor
      <Tag tone="warn" variant="filled" size="xs">Admin</Tag>
    </template>
    <template #rightSection>
      <Button size="xs" variant="accent">Nova campanha</Button>
    </template>
  </TopNav>
</template>
