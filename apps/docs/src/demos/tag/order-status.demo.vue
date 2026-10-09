<script setup lang="ts">
import { Tag, Table, TableTbody, TableTd, TableTh, TableThead, TableTr, type TagTone } from '@jcdecor/vue';

const orders: { id: string; product: string; tone: TagTone; status: string }[] = [
  { id: '#10482', product: 'Piso vinílico Carvalho Natural · 12 m²', tone: 'success', status: 'Entregue' },
  { id: '#10483', product: 'Papel de parede Linho Bege · 4 rolos', tone: 'primary', status: 'Em transporte' },
  { id: '#10484', product: 'Painel ripado Freijó · 6 peças', tone: 'warn', status: 'Aguardando pagamento' },
  { id: '#10485', product: 'Grama sintética 25 mm · 20 m²', tone: 'error', status: 'Cancelado' },
];
</script>

<template>
  <Table>
    <TableThead>
      <TableTr>
        <TableTh>Pedido</TableTh>
        <TableTh>Produto</TableTh>
        <TableTh>Status</TableTh>
      </TableTr>
    </TableThead>
    <TableTbody>
      <TableTr v-for="order in orders" :key="order.id">
        <TableTd>{{ order.id }}</TableTd>
        <TableTd>{{ order.product }}</TableTd>
        <TableTd><Tag :tone="order.tone" variant="dot">{{ order.status }}</Tag></TableTd>
      </TableTr>
    </TableTbody>
  </Table>
</template>
