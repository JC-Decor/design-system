<script setup lang="ts">
import { List, ListItem, Text } from '@jcdecor/vue';
</script>

<template>
  <div>
    <Text :fw="600" mb="sm">Instalação do piso vinílico click</Text>
    <List type="ordered">
      <ListItem>Deixe as caixas no ambiente por 48 horas para aclimatar o material.</ListItem>
      <ListItem>Verifique se o contrapiso está limpo, seco e nivelado (desnível máximo de 2 mm por metro).</ListItem>
      <ListItem>Aplique a manta acústica com as emendas encostadas, sem sobrepor.</ListItem>
      <ListItem>Comece pelo canto mais longo da parede, deixando 8 mm de junta de dilatação.</ListItem>
      <ListItem>Encaixe as réguas em ângulo e pressione até ouvir o clique.</ListItem>
      <ListItem>Finalize com rodapés, sem fixá-los no piso.</ListItem>
    </List>
  </div>
</template>
