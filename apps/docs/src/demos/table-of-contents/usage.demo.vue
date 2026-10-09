<script setup lang="ts">
import { ref } from 'vue';
import {
  Box,
  Group,
  SegmentedControl,
  Stack,
  TableOfContents,
  Text,
  Title,
  type TableOfContentsProps,
  type TableOfContentsVariant,
} from '@jcdecor/vue';

const sections = [
  { id: 'guia-materiais', depth: 1, title: 'Materiais necessários' },
  { id: 'guia-contrapiso', depth: 1, title: 'Preparando o contrapiso' },
  { id: 'guia-nivelamento', depth: 2, title: 'Nivelamento' },
  { id: 'guia-umidade', depth: 2, title: 'Teste de umidade' },
  { id: 'guia-instalacao', depth: 1, title: 'Instalação das réguas' },
  { id: 'guia-acabamento', depth: 1, title: 'Rodapés e acabamento' },
];

const variant = ref<TableOfContentsVariant>('light');

// Elemento com rolagem própria que o scroll spy observa (em vez da janela)
const scrollHost = ref<HTMLElement>();
const setScrollHost = (element: Element | null) => (scrollHost.value = (element as HTMLElement) ?? undefined);

const scrollSpyOptions: TableOfContentsProps['scrollSpyOptions'] = {
  selector: '[data-guide-heading]',
  getDepth: (element) => Number(element.dataset.depth),
  scrollHost,
};

const getControlProps: TableOfContentsProps['getControlProps'] = ({ data }) => ({
  onClick: () => data.getNode().scrollIntoView({ behavior: 'smooth', block: 'nearest' }),
  children: data.value,
});
</script>

<template>
  <Stack>
    <SegmentedControl v-model="variant" size="xs" w="fit-content" :data="['light', 'filled', 'none']" />
    <Group align="flex-start" wrap="nowrap" gap="lg">
      <TableOfContents
        :w="220"
        size="sm"
        :variant="variant"
        :min-depth-to-offset="1"
        :depth-offset="20"
        :scroll-spy-options="scrollSpyOptions"
        :get-control-props="getControlProps"
      />
      <Box :root-ref="setScrollHost" :h="280" :style="{ overflowY: 'auto', flex: 1 }" pr="sm">
        <Box v-for="section in sections" :key="section.id" mb="xl">
          <Title
            :id="section.id"
            :order="section.depth === 1 ? 4 : 5"
            data-guide-heading
            :data-depth="section.depth"
            mb="xs"
          >
            {{ section.title }}
          </Title>
          <Text fz="sm" c="var(--ds-text-2)">
            Siga as recomendações do fabricante para garantir a garantia de 15 anos do piso vinílico. Mantenha o
            ambiente ventilado e as caixas na horizontal por 48 horas antes da instalação.
          </Text>
        </Box>
      </Box>
    </Group>
  </Stack>
</template>
