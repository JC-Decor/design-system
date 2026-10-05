<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { Group, Paper, RollingNumber, SimpleGrid, Text } from '@jcdecor/vue';
import { IconTrendingUp } from '@tabler/icons-vue';

const vendas = ref(184320.5);
const pedidos = ref(1287);

let id: ReturnType<typeof setInterval>;
onMounted(() => {
  id = setInterval(() => {
    vendas.value += Math.round(Math.random() * 90000) / 100;
    pedidos.value += Math.ceil(Math.random() * 4);
  }, 2000);
});
onUnmounted(() => clearInterval(id));
</script>

<template>
  <SimpleGrid type="container" :cols="{ base: 1, '560px': 2 }" w="100%">
    <Paper with-border p="lg">
      <Text fz="sm" c="var(--ds-text-3)">Vendas hoje</Text>
      <RollingNumber
        :value="vendas"
        prefix="R$ "
        thousand-separator="."
        decimal-separator=","
        :decimal-scale="2"
        fixed-decimal-scale
        fz="var(--type-headline-md)"
        :fw="700"
        :mt="4"
      />
      <Group :gap="4" mt="xs" c="var(--ds-success)" fz="sm" :fw="600">
        <IconTrendingUp :size="16" /> 12,4% vs. ontem
      </Group>
    </Paper>
    <Paper with-border p="lg">
      <Text fz="sm" c="var(--ds-text-3)">Pedidos</Text>
      <RollingNumber :value="pedidos" thousand-separator="." fz="var(--type-headline-md)" :fw="700" :mt="4" />
      <Text fz="sm" c="var(--ds-text-3)" mt="xs">Atualiza a cada 2 segundos</Text>
    </Paper>
  </SimpleGrid>
</template>
