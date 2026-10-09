<script lang="ts">
export const meta = { withoutPadding: true };
</script>

<script setup lang="ts">
import { AppShell, AppShellHeader, AppShellMain, AppShellNavbar, Burger, Group, NavLink, Text, Title } from '@jcdecor/vue';
import { useDisclosure } from '@mantine-vue/hooks';
import { IconBox, IconChartBar, IconLayoutDashboard, IconUsers } from '@tabler/icons-vue';

const links = [
  { label: 'Visão geral', icon: IconLayoutDashboard },
  { label: 'Pedidos', icon: IconBox },
  { label: 'Clientes', icon: IconUsers },
  { label: 'Relatórios', icon: IconChartBar },
];

const [opened, { toggle }] = useDisclosure(true);
</script>

<template>
  <AppShell
    mode="static"
    :h="420"
    :header="{ height: 56 }"
    :navbar="{ width: 220, breakpoint: 'sm', collapsed: { mobile: !opened, desktop: !opened } }"
    padding="lg"
  >
    <AppShellHeader>
      <Group h="100%" px="md" gap="sm">
        <Burger :opened="opened" size="sm" aria-label="Alternar menu" @click="toggle" />
        <Text :fw="600">JC Decor · Painel</Text>
      </Group>
    </AppShellHeader>

    <AppShellNavbar p="sm">
      <NavLink v-for="(link, index) in links" :key="link.label" :label="link.label" :active="index === 1">
        <template #leftSection><component :is="link.icon" :size="18" /></template>
      </NavLink>
    </AppShellNavbar>

    <AppShellMain>
      <Title :order="3">Pedidos</Title>
      <Text c="var(--ds-text-2)" mt="xs">
        128 pedidos aguardando separação. Use o menu ao lado para navegar entre as áreas do painel.
      </Text>
    </AppShellMain>
  </AppShell>
</template>
