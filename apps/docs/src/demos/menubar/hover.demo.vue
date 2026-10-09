<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { MenuItem, Menubar, MenubarDropdown, MenubarMenu, MenubarTarget } from '@jcdecor/vue';

const sections = {
  Pedidos: ['Todos os pedidos', 'Aguardando pagamento', 'Em separação', 'Devoluções'],
  Produtos: ['Catálogo', 'Coleções', 'Estoque', 'Avaliações'],
  Clientes: ['Lista de clientes', 'Segmentos', 'Cupons'],
};
</script>

<template>
  <Menubar trigger="hover" aria-label="Navegação do painel">
    <MenubarMenu v-for="(items, label) in sections" :key="label" :width="200">
      <MenubarTarget>{{ label }}</MenubarTarget>
      <MenubarDropdown>
        <MenuItem v-for="item in items" :key="item">{{ item }}</MenuItem>
      </MenubarDropdown>
    </MenubarMenu>
  </Menubar>
</template>
