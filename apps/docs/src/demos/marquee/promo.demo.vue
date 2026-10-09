<script lang="ts">
export const meta = { withoutPadding: true };
</script>

<script setup lang="ts">
import { Group, Marquee, Text } from '@jcdecor/vue';
import { IconCreditCard, IconDiscount, IconTruckDelivery } from '@tabler/icons-vue';

const mensagens = [
  { icon: IconTruckDelivery, texto: 'Frete grátis acima de R$ 499' },
  { icon: IconCreditCard, texto: 'Até 10x sem juros' },
  { icon: IconDiscount, texto: '5% off no Pix' },
];
</script>

<template>
  <Marquee bg="var(--ds-accent)" c="var(--dc-obsidian)" py="sm" gap="xl" :duration="30000" pause-on-hover :fade-edges="false">
    <Group v-for="mensagem in mensagens" :key="mensagem.texto" :gap="6" wrap="nowrap">
      <component :is="mensagem.icon" :size="18" />
      <Text fz="sm" :fw="600" :style="{ whiteSpace: 'nowrap' }">{{ mensagem.texto }}</Text>
    </Group>
  </Marquee>
</template>
