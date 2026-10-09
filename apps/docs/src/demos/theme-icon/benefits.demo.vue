<script setup lang="ts">
import { Group, SimpleGrid, Text, ThemeIcon } from '@jcdecor/vue';
import { IconCreditCard, IconRefresh, IconTruckDelivery } from '@tabler/icons-vue';

const beneficios = [
  { icon: IconTruckDelivery, titulo: 'Frete grátis', texto: 'Acima de R$ 499 no Sul e Sudeste' },
  { icon: IconRefresh, titulo: 'Devolução fácil', texto: 'Até 30 dias, com coleta grátis' },
  { icon: IconCreditCard, titulo: '10x sem juros', texto: 'Ou 5% de desconto no Pix' },
];
</script>

<template>
  <SimpleGrid type="container" :cols="{ base: 1, '560px': 3 }" w="100%">
    <Group v-for="b in beneficios" :key="b.titulo" wrap="nowrap" gap="sm">
      <ThemeIcon variant="light" size="xl">
        <component :is="b.icon" :size="22" />
      </ThemeIcon>
      <div>
        <Text :fw="600" fz="sm">{{ b.titulo }}</Text>
        <Text fz="xs" c="var(--ds-text-3)">{{ b.texto }}</Text>
      </div>
    </Group>
  </SimpleGrid>
</template>
