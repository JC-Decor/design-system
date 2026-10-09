<script setup lang="ts">
import { List, ListItem } from '@jcdecor/vue';
</script>

<template>
  <List>
    <ListItem>Ferramentas necessárias</ListItem>
    <ListItem>
      Materiais inclusos na caixa
      <List with-padding list-style-type="circle">
        <ListItem>10 réguas de 1,22 m</ListItem>
        <ListItem>Manual de instalação</ListItem>
      </List>
    </ListItem>
    <ListItem>Itens vendidos separadamente</ListItem>
  </List>
</template>
