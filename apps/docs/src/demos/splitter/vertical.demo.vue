<script lang="ts">
export const meta = { withoutPadding: true };
</script>

<script setup lang="ts">
import { Paper, Splitter, SplitterPane, Text } from '@jcdecor/vue';
</script>

<template>
  <Paper :h="320" :radius="0">
    <Splitter orientation="vertical" h="100%">
      <SplitterPane :default-size="60" p="md">
        <Text :fw="600">Pré-visualização</Text>
        <Text fz="sm" c="var(--ds-text-2)">Simulação do papel de parede aplicado na parede da sala.</Text>
      </SplitterPane>
      <SplitterPane :default-size="40" :min="20" p="md">
        <Text :fw="600">Propriedades</Text>
        <Text fz="sm" c="var(--ds-text-2)">Largura do rolo: 0,53 m · Rendimento: 5 m²</Text>
      </SplitterPane>
    </Splitter>
  </Paper>
</template>
