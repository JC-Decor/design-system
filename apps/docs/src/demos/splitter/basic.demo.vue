<script lang="ts">
export const meta = { withoutPadding: true };
</script>

<script setup lang="ts">
import { ref } from 'vue';
import { Badge, Group, Paper, Splitter, SplitterPane, Stack, Text, UnstyledButton } from '@jcdecor/vue';

const pedidos = [
  { id: '#48213', cliente: 'Mariana Souza', total: 'R$ 3.249,90', status: 'Separando' },
  { id: '#48212', cliente: 'Carlos Lima', total: 'R$ 689,00', status: 'Enviado' },
  { id: '#48211', cliente: 'Ana Ribeiro', total: 'R$ 1.120,50', status: 'Entregue' },
];

const selected = ref(pedidos[0]);
</script>

<template>
  <Paper :h="300" :radius="0">
    <Splitter h="100%">
      <SplitterPane :default-size="35" :min="20" :max="60">
        <Stack :gap="0">
          <UnstyledButton
            v-for="pedido in pedidos"
            :key="pedido.id"
            p="md"
            :bg="selected.id === pedido.id ? 'var(--ds-primary-soft)' : undefined"
            :style="{ borderBottom: '1px solid var(--ds-border-soft)' }"
            @click="selected = pedido"
          >
            <Text :fw="600" fz="sm">{{ pedido.id }}</Text>
            <Text fz="sm" c="var(--ds-text-2)">{{ pedido.cliente }}</Text>
          </UnstyledButton>
        </Stack>
      </SplitterPane>
      <SplitterPane :default-size="65" p="lg">
        <Group justify="space-between">
          <Text :fw="600">Pedido {{ selected.id }}</Text>
          <Badge variant="light">{{ selected.status }}</Badge>
        </Group>
        <Text fz="sm" c="var(--ds-text-2)" mt="xs">Cliente: {{ selected.cliente }} · Total: {{ selected.total }}</Text>
        <Text fz="sm" c="var(--ds-text-3)" mt="md">
          Arraste a divisória ou use as setas do teclado com ela em foco.
        </Text>
      </SplitterPane>
    </Splitter>
  </Paper>
</template>
