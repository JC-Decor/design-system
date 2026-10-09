<script lang="ts">
export const meta = { centered: true, maxWidth: 280 };
</script>

<script setup lang="ts">
import { ref } from 'vue';
import { Badge, NavLink, Paper } from '@jcdecor/vue';
import { IconBox, IconChartBar, IconHome, IconMessageCircle, IconShoppingBag, IconUsers } from '@tabler/icons-vue';

const active = ref('pedidos');

const catalogo = [
  { value: 'pisos', label: 'Pisos vinílicos' },
  { value: 'papel', label: 'Papel de parede' },
  { value: 'paineis', label: 'Painéis ripados' },
];

const gestao = [
  { value: 'clientes', label: 'Clientes', icon: IconUsers },
  { value: 'atendimento', label: 'Atendimento', icon: IconMessageCircle },
  { value: 'relatorios', label: 'Relatórios', icon: IconChartBar },
];
</script>

<template>
  <Paper with-border p="xs">
    <NavLink href="#inicio" label="Início" :active="active === 'inicio'" @click.prevent="active = 'inicio'">
      <template #leftSection><IconHome :size="18" /></template>
    </NavLink>
    <NavLink href="#pedidos" label="Pedidos" :active="active === 'pedidos'" @click.prevent="active = 'pedidos'">
      <template #leftSection><IconShoppingBag :size="18" /></template>
      <template #rightSection><Badge size="sm" circle>8</Badge></template>
    </NavLink>
    <NavLink label="Catálogo" :children-offset="28" default-opened>
      <template #leftSection><IconBox :size="18" /></template>
      <NavLink
        v-for="item in catalogo"
        :key="item.value"
        :href="`#${item.value}`"
        :label="item.label"
        :active="active === item.value"
        @click.prevent="active = item.value"
      />
    </NavLink>
    <NavLink
      v-for="item in gestao"
      :key="item.value"
      :href="`#${item.value}`"
      :label="item.label"
      :active="active === item.value"
      @click.prevent="active = item.value"
    >
      <template #leftSection><component :is="item.icon" :size="18" /></template>
    </NavLink>
  </Paper>
</template>
