<script lang="ts">
export const meta = { centered: true, maxWidth: 320 };
</script>

<script setup lang="ts">
import { Badge, Button, Card, CardSection, Group, Image, Text } from '@jcdecor/vue';
import { IconShoppingCart } from '@tabler/icons-vue';
</script>

<template>
  <Card>
    <CardSection>
      <Image src="https://picsum.photos/seed/carvalho/600/400" :h="160" :radius="0" alt="Piso vinílico Carvalho" />
    </CardSection>
    <Group justify="space-between" mt="md" :mb="4">
      <Text :fw="600">Piso vinílico Carvalho</Text>
      <Badge color="evergreen">Em estoque</Badge>
    </Group>
    <Text fz="sm" c="var(--ds-text-2)">Réguas click de 5mm com manta acústica. Caixa com 2,2 m².</Text>
    <Text :fw="700" fz="lg" mt="sm">
      R$ 89,90
      <Text span fz="sm" :fw="400" c="var(--ds-text-3)">/m²</Text>
    </Text>
    <Button full-width mt="md">
      <template #leftSection><IconShoppingCart :size="18" /></template>
      Adicionar ao carrinho
    </Button>
  </Card>
</template>
