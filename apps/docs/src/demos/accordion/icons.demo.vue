<script setup lang="ts">
import { Accordion, AccordionItem, AccordionControl, AccordionPanel } from '@jcdecor/vue';
import { IconCreditCard, IconRefresh, IconTruckDelivery } from '@tabler/icons-vue';

const secoes = [
  {
    value: 'entrega',
    icon: IconTruckDelivery,
    titulo: 'Entrega',
    texto: 'Enviamos para todo o Brasil. Produtos grandes, como painéis e pisos, são entregues por transportadora com agendamento.',
  },
  {
    value: 'pagamento',
    icon: IconCreditCard,
    titulo: 'Pagamento',
    texto: 'Cartão em até 10x sem juros, boleto ou Pix com 5% de desconto. O pedido é confirmado assim que o pagamento é aprovado.',
  },
  {
    value: 'troca',
    icon: IconRefresh,
    titulo: 'Troca e devolução',
    texto: 'Solicite pelo app ou site em até 30 dias. O reembolso é feito na mesma forma de pagamento da compra.',
  },
];
</script>

<template>
  <Accordion variant="separated" multiple :default-value="['entrega']" w="100%">
    <AccordionItem v-for="secao in secoes" :key="secao.value" :value="secao.value">
      <AccordionControl>
        <template #icon><component :is="secao.icon" :size="20" color="var(--ds-primary)" /></template>
        {{ secao.titulo }}
      </AccordionControl>
      <AccordionPanel>{{ secao.texto }}</AccordionPanel>
    </AccordionItem>
  </Accordion>
</template>
