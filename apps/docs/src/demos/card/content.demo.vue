<script setup lang="ts">
import { Button, Card, Kicker, SimpleGrid, Text } from '@jcdecor/vue';

const guias = [
  { kicker: 'Guia', title: 'Como medir sua parede', body: 'Calcule a quantidade de rolos de papel de parede sem desperdício.' },
  { kicker: 'Inspiração', title: 'Painel ripado na sala', body: 'Cinco composições para valorizar a parede da TV.' },
  { kicker: 'Manutenção', title: 'Limpeza de grama sintética', body: 'Escovação, enxágue e cuidados para manter o gramado bonito.' },
];
</script>

<template>
  <SimpleGrid type="container" :cols="{ base: 1, '560px': 3 }" w="100%">
    <Card v-for="g in guias" :key="g.title">
      <Kicker>{{ g.kicker }}</Kicker>
      <Text :fw="600" fz="lg" :mt="4">{{ g.title }}</Text>
      <Text fz="sm" c="var(--ds-text-2)" mt="xs">{{ g.body }}</Text>
      <Button size="sm" variant="outline" mt="md">Ler artigo</Button>
    </Card>
  </SimpleGrid>
</template>
