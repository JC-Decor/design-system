<script setup lang="ts">
import { Tabs, TabsList, TabsPanel, TabsTab, Text } from '@jcdecor/vue';
import { IconInfoCircle, IconRuler, IconStar, IconTruckDelivery } from '@tabler/icons-vue';
</script>

<template>
  <Tabs default-value="descricao" w="100%">
    <TabsList>
      <TabsTab value="descricao">
        <template #leftSection><IconInfoCircle :size="16" /></template>
        Descrição
      </TabsTab>
      <TabsTab value="medidas">
        <template #leftSection><IconRuler :size="16" /></template>
        Medidas
      </TabsTab>
      <TabsTab value="entrega">
        <template #leftSection><IconTruckDelivery :size="16" /></template>
        Entrega
      </TabsTab>
      <TabsTab value="avaliacoes">
        <template #leftSection><IconStar :size="16" /></template>
        Avaliações (48)
      </TabsTab>
    </TabsList>

    <TabsPanel value="descricao" pt="md">
      <Text fz="sm" c="var(--ds-text-2)">
        Piso vinílico em réguas com encaixe click, resistente à água e com manta acústica integrada.
      </Text>
    </TabsPanel>
    <TabsPanel value="medidas" pt="md">
      <Text fz="sm" c="var(--ds-text-2)">Régua de 1220 × 180 mm, espessura de 5 mm. Caixa com 10 réguas (2,2 m²).</Text>
    </TabsPanel>
    <TabsPanel value="entrega" pt="md">
      <Text fz="sm" c="var(--ds-text-2)">Frete grátis para o Sudeste em compras acima de R$ 499.</Text>
    </TabsPanel>
    <TabsPanel value="avaliacoes" pt="md">
      <Text fz="sm" c="var(--ds-text-2)">Nota média 4,8 de 5.</Text>
    </TabsPanel>
  </Tabs>
</template>
