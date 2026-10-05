<script setup lang="ts">
import { Table, TableTbody, TableTd, TableTh, TableThead, TableTr } from '@jcdecor/vue';

const rows = [
  { keyword: 'piso vinilico autocolante', acessos: '505', impressoes: '127.237', posicao: '6,6' },
  { keyword: 'grama sintetica', acessos: '143', impressoes: '31.908', posicao: '7,7' },
  { keyword: 'painel ripado', acessos: '86', impressoes: '27.945', posicao: '10,4' },
];
</script>

<template>
  <Table tabular-nums>
    <TableThead>
      <TableTr>
        <TableTh>Palavra-chave</TableTh>
        <TableTh ta="right">Acessos</TableTh>
        <TableTh ta="right">Impressões</TableTh>
        <TableTh ta="right">Posição</TableTh>
      </TableTr>
    </TableThead>
    <TableTbody>
      <TableTr v-for="row in rows" :key="row.keyword">
        <TableTd>{{ row.keyword }}</TableTd>
        <TableTd ta="right">{{ row.acessos }}</TableTd>
        <TableTd ta="right">{{ row.impressoes }}</TableTd>
        <TableTd ta="right">{{ row.posicao }}</TableTd>
      </TableTr>
    </TableTbody>
  </Table>
</template>
