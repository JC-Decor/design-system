<script setup lang="ts">
import { Table, TableScrollContainer, TableTbody, TableTd, TableTh, TableThead, TableTr } from '@jcdecor/vue';

const produtos = [
  { sku: 'PV-CARV-05', nome: 'Piso vinílico Carvalho Natural', estoque: 412, preco: 'R$ 89,90' },
  { sku: 'PP-FOLH-10', nome: 'Papel de parede Folhagem Verde', estoque: 96, preco: 'R$ 129,90' },
  { sku: 'PR-FREI-27', nome: 'Painel ripado Freijó 2,70m', estoque: 38, preco: 'R$ 349,00' },
  { sku: 'GS-PREM-25', nome: 'Grama sintética Premium 25mm', estoque: 1240, preco: 'R$ 54,90' },
  { sku: 'CT-LINH-28', nome: 'Cortina Linho Cru 2,80m', estoque: 61, preco: 'R$ 279,90' },
];
</script>

<template>
  <TableScrollContainer :min-width="560">
    <Table striped with-table-border with-column-borders tabular-nums>
      <TableThead>
        <TableTr>
          <TableTh>SKU</TableTh>
          <TableTh>Produto</TableTh>
          <TableTh ta="right">Estoque</TableTh>
          <TableTh ta="right">Preço</TableTh>
        </TableTr>
      </TableThead>
      <TableTbody>
        <TableTr v-for="p in produtos" :key="p.sku">
          <TableTd ff="monospace" fz="xs">{{ p.sku }}</TableTd>
          <TableTd>{{ p.nome }}</TableTd>
          <TableTd ta="right">{{ p.estoque.toLocaleString('pt-BR') }}</TableTd>
          <TableTd ta="right">{{ p.preco }}</TableTd>
        </TableTr>
      </TableTbody>
    </Table>
  </TableScrollContainer>
</template>
