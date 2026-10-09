<script setup lang="ts">
import { computed, ref } from 'vue';
import {
  ActionBar,
  ActionBarCloseButton,
  ActionBarDivider,
  Badge,
  Button,
  Checkbox,
  Table,
  TableTbody,
  TableTd,
  TableTh,
  TableThead,
  TableTr,
  Text,
} from '@jcdecor/vue';
import { IconFileExport, IconPrinter, IconTrash, IconTruck } from '@tabler/icons-vue';

const orders = [
  { id: '10481', customer: 'Ana Ribeiro', total: 'R$ 2.870,00', status: 'Pago' },
  { id: '10480', customer: 'Bruno Carvalho', total: 'R$ 459,90', status: 'Pago' },
  { id: '10479', customer: 'Camila Duarte', total: 'R$ 1.249,00', status: 'Aguardando' },
  { id: '10478', customer: 'Diego Martins', total: 'R$ 189,90', status: 'Pago' },
];

const selected = ref<string[]>([]);
const allSelected = computed(() => selected.value.length === orders.length);

const toggle = (id: string) => {
  selected.value = selected.value.includes(id) ? selected.value.filter((value) => value !== id) : [...selected.value, id];
};
const toggleAll = () => {
  selected.value = allSelected.value ? [] : orders.map((order) => order.id);
};
</script>

<template>
  <Table highlight-on-hover vertical-spacing="sm">
    <TableThead>
      <TableTr>
        <TableTh :w="40">
          <Checkbox
            aria-label="Selecionar todos"
            :checked="allSelected"
            :indeterminate="selected.length > 0 && !allSelected"
            @change="toggleAll"
          />
        </TableTh>
        <TableTh>Pedido</TableTh>
        <TableTh>Cliente</TableTh>
        <TableTh>Total</TableTh>
        <TableTh>Status</TableTh>
      </TableTr>
    </TableThead>
    <TableTbody>
      <TableTr v-for="order in orders" :key="order.id" :bg="selected.includes(order.id) ? 'var(--ds-primary-soft)' : undefined">
        <TableTd>
          <Checkbox :aria-label="`Selecionar pedido ${order.id}`" :checked="selected.includes(order.id)" @change="toggle(order.id)" />
        </TableTd>
        <TableTd :fw="600">#{{ order.id }}</TableTd>
        <TableTd>{{ order.customer }}</TableTd>
        <TableTd>{{ order.total }}</TableTd>
        <TableTd>
          <Badge :color="order.status === 'Pago' ? 'evergreen' : 'electric'">{{ order.status }}</Badge>
        </TableTd>
      </TableTr>
    </TableTbody>
  </Table>

  <ActionBar :opened="selected.length > 0" close-on-escape aria-label="Ações em massa dos pedidos" @close="selected = []">
    <Text fz="sm" :fw="600" px="xs">
      {{ selected.length }} {{ selected.length === 1 ? 'pedido selecionado' : 'pedidos selecionados' }}
    </Text>
    <ActionBarDivider />
    <Button size="sm" variant="subtle">
      <template #leftSection><IconTruck :size="16" /></template>
      Marcar como enviado
    </Button>
    <Button size="sm" variant="subtle">
      <template #leftSection><IconPrinter :size="16" /></template>
      Etiquetas
    </Button>
    <Button size="sm" variant="subtle">
      <template #leftSection><IconFileExport :size="16" /></template>
      Exportar
    </Button>
    <Button size="sm" variant="subtle" color="danger">
      <template #leftSection><IconTrash :size="16" /></template>
      Cancelar pedidos
    </Button>
    <ActionBarDivider />
    <ActionBarCloseButton aria-label="Limpar seleção" />
  </ActionBar>
</template>
