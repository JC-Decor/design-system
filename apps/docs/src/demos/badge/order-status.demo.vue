<script lang="ts">
export const meta = { maxWidth: 480, centered: true };
</script>

<script setup lang="ts">
import { Badge, Group, Paper, Stack, Text } from '@jcdecor/vue';

const pedidos = [
  { id: '#10482', produto: 'Piso vinílico Carvalho Natural', status: 'Entregue', color: 'evergreen' },
  { id: '#10481', produto: 'Papel de parede Folhagem Verde', status: 'Em trânsito', color: 'horizon' },
  { id: '#10479', produto: 'Cortina Linho Cru 2,80m', status: 'Aguardando pagamento', color: 'electric' },
  { id: '#10475', produto: 'Painel ripado Freijó', status: 'Cancelado', color: 'danger' },
];
</script>

<template>
  <Paper with-border>
    <Stack :gap="0">
      <Group
        v-for="(p, i) in pedidos"
        :key="p.id"
        justify="space-between"
        wrap="nowrap"
        px="md"
        py="sm"
        :style="{ borderTop: i ? '1px solid var(--ds-border-soft)' : undefined }"
      >
        <div>
          <Text fz="sm" :fw="600">{{ p.id }}</Text>
          <Text fz="xs" c="var(--ds-text-3)">{{ p.produto }}</Text>
        </div>
        <Badge :color="p.color">{{ p.status }}</Badge>
      </Group>
    </Stack>
  </Paper>
</template>
