<script lang="ts">
export const meta = { withoutPadding: true };
</script>

<script setup lang="ts">
import {
  AppShell,
  AppShellAside,
  AppShellFooter,
  AppShellHeader,
  AppShellMain,
  AppShellNavbar,
  Group,
  NavLink,
  Stack,
  Text,
} from '@jcdecor/vue';
import { IconBuildingStore, IconPackage, IconTruckDelivery } from '@tabler/icons-vue';
</script>

<template>
  <AppShell
    mode="static"
    layout="alt"
    :h="420"
    :header="{ height: 56 }"
    :footer="{ height: 48 }"
    :navbar="{ width: 200, breakpoint: 'sm' }"
    :aside="{ width: 240, breakpoint: 'md' }"
    padding="lg"
  >
    <AppShellHeader>
      <Group h="100%" px="md">
        <Text :fw="600">Pedido #48213</Text>
      </Group>
    </AppShellHeader>

    <AppShellNavbar p="sm">
      <Text :fw="700" px="sm" py="xs">JC Decor</Text>
      <NavLink label="Loja">
        <template #leftSection><IconBuildingStore :size="18" /></template>
      </NavLink>
      <NavLink label="Pedidos" active>
        <template #leftSection><IconPackage :size="18" /></template>
      </NavLink>
      <NavLink label="Entregas">
        <template #leftSection><IconTruckDelivery :size="18" /></template>
      </NavLink>
    </AppShellNavbar>

    <AppShellMain>
      <Text :fw="600">Itens do pedido</Text>
      <Text fz="sm" c="var(--ds-text-2)">
        Piso vinílico Carvalho Natural · 24 m² — Rodapé MDF branco · 18 m
      </Text>
    </AppShellMain>

    <AppShellAside p="md">
      <Stack :gap="4">
        <Text :fw="600">Resumo</Text>
        <Text fz="sm" c="var(--ds-text-2)">Subtotal: R$ 3.249,90</Text>
        <Text fz="sm" c="var(--ds-text-2)">Frete: grátis</Text>
      </Stack>
    </AppShellAside>

    <AppShellFooter>
      <Group h="100%" px="md">
        <Text fz="sm" c="var(--ds-text-3)">Última atualização há 5 minutos</Text>
      </Group>
    </AppShellFooter>
  </AppShell>
</template>
