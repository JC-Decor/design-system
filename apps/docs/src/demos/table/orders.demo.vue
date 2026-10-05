<script setup lang="ts">
import {
  ActionIcon,
  Avatar,
  Badge,
  Group,
  Menu,
  MenuDropdown,
  MenuItem,
  MenuTarget,
  Table,
  TableScrollContainer,
  TableTbody,
  TableTd,
  TableTh,
  TableThead,
  TableTr,
  Text,
} from '@jcdecor/vue';
import { IconDots, IconEye, IconPrinter, IconX } from '@tabler/icons-vue';

const pedidos = [
  { id: '#10482', cliente: 'Ana Ribeiro', data: '02/10/2026', total: 'R$ 1.249,90', status: 'Pago', color: 'evergreen' },
  { id: '#10481', cliente: 'Bruno Carvalho', data: '01/10/2026', total: 'R$ 389,70', status: 'Em separação', color: 'horizon' },
  { id: '#10479', cliente: 'Carla Mendes', data: '30/09/2026', total: 'R$ 2.870,00', status: 'Aguardando', color: 'electric' },
  { id: '#10475', cliente: 'Diego Santos', data: '28/09/2026', total: 'R$ 156,40', status: 'Cancelado', color: 'danger' },
];
</script>

<template>
  <TableScrollContainer :min-width="640">
    <Table tabular-nums>
      <TableThead>
        <TableTr>
          <TableTh>Pedido</TableTh>
          <TableTh>Cliente</TableTh>
          <TableTh>Data</TableTh>
          <TableTh>Status</TableTh>
          <TableTh ta="right">Total</TableTh>
          <TableTh :w="48" />
        </TableTr>
      </TableThead>
      <TableTbody>
        <TableTr v-for="p in pedidos" :key="p.id">
          <TableTd :fw="600">{{ p.id }}</TableTd>
          <TableTd>
            <Group gap="sm" wrap="nowrap">
              <Avatar :name="p.cliente" size="sm" />
              <Text fz="sm">{{ p.cliente }}</Text>
            </Group>
          </TableTd>
          <TableTd c="var(--ds-text-3)">{{ p.data }}</TableTd>
          <TableTd><Badge :color="p.color">{{ p.status }}</Badge></TableTd>
          <TableTd ta="right" :fw="600">{{ p.total }}</TableTd>
          <TableTd>
            <Menu position="bottom-end">
              <MenuTarget>
                <ActionIcon :aria-label="`Ações do pedido ${p.id}`">
                  <IconDots :size="16" />
                </ActionIcon>
              </MenuTarget>
              <MenuDropdown>
                <MenuItem>
                  <template #leftSection><IconEye :size="14" /></template>
                  Ver detalhes
                </MenuItem>
                <MenuItem>
                  <template #leftSection><IconPrinter :size="14" /></template>
                  Imprimir etiqueta
                </MenuItem>
                <MenuItem color="danger">
                  <template #leftSection><IconX :size="14" /></template>
                  Cancelar pedido
                </MenuItem>
              </MenuDropdown>
            </Menu>
          </TableTd>
        </TableTr>
      </TableTbody>
    </Table>
  </TableScrollContainer>
</template>
