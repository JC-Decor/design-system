<script lang="ts">
export const meta = { centered: true, maxWidth: 360 };
</script>

<script setup lang="ts">
import { Button, Card, CardSection, Divider, Group, Stack, Text } from '@jcdecor/vue';

const itens = [
  { nome: 'Papel de parede Linho Bege (3 rolos)', valor: 'R$ 389,70' },
  { nome: 'Cola para papel de parede', valor: 'R$ 32,90' },
];
</script>

<template>
  <Card>
    <CardSection with-border inherit-padding py="sm">
      <Text :fw="600">Resumo do pedido</Text>
    </CardSection>
    <Stack gap="xs" mt="md">
      <Group v-for="item in itens" :key="item.nome" justify="space-between" wrap="nowrap" align="flex-start">
        <Text fz="sm" c="var(--ds-text-2)">{{ item.nome }}</Text>
        <Text fz="sm" :style="{ whiteSpace: 'nowrap' }">{{ item.valor }}</Text>
      </Group>
      <Group justify="space-between">
        <Text fz="sm" c="var(--ds-text-2)">Frete</Text>
        <Text fz="sm" c="var(--ds-success)" :fw="600">Grátis</Text>
      </Group>
    </Stack>
    <Divider my="md" />
    <Group justify="space-between">
      <Text :fw="600">Total</Text>
      <Text :fw="700" fz="lg">R$ 422,60</Text>
    </Group>
    <Button full-width mt="md">Finalizar compra</Button>
  </Card>
</template>
