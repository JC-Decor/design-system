<script setup lang="ts">
import { Accordion, AccordionItem, AccordionControl, AccordionPanel, SimpleGrid, Text } from '@jcdecor/vue';

const itens = [
  { value: 'prazo', label: 'Prazo de entrega', texto: 'Até 3 dias úteis nas capitais do Sudeste.' },
  { value: 'troca', label: 'Trocas e devoluções', texto: 'Até 30 dias após o recebimento.' },
  { value: 'garantia', label: 'Garantia', texto: '5 anos contra defeitos de fabricação.' },
];
const variants = ['default', 'contained', 'separated', 'filled'] as const;
</script>

<template>
  <SimpleGrid type="container" :cols="{ base: 1, '560px': 2 }" w="100%" spacing="xl">
    <div v-for="variant in variants" :key="variant">
      <Text fz="xs" :fw="600" c="var(--ds-text-3)" tt="uppercase" mb="xs">{{ variant }}</Text>
      <Accordion :variant="variant" default-value="prazo">
        <AccordionItem v-for="item in itens" :key="item.value" :value="item.value">
          <AccordionControl>{{ item.label }}</AccordionControl>
          <AccordionPanel>{{ item.texto }}</AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  </SimpleGrid>
</template>
