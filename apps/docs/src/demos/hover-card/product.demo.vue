<script lang="ts">
export const meta = { maxWidth: 520, centered: true };
</script>

<script setup lang="ts">
import {
  Anchor,
  Badge,
  Group,
  HoverCard,
  HoverCardDropdown,
  HoverCardTarget,
  Image,
  Rating,
  Stack,
  Table,
  TableTbody,
  TableTd,
  TableTh,
  TableThead,
  TableTr,
  Text,
} from '@jcdecor/vue';

const items = [
  { sku: 'PV-CAR-26', name: 'Piso vinílico Carvalho Natural', seed: 'carvalho', price: 'R$ 249,90', stock: 342, rating: 4.7 },
  { sku: 'PP-FOL-10', name: 'Papel de parede Folhagem', seed: 'folhagem', price: 'R$ 159,90', stock: 0, rating: 4.4 },
];
</script>

<template>
  <Table vertical-spacing="sm">
    <TableThead>
      <TableTr>
        <TableTh>Produto</TableTh>
        <TableTh ta="right">Qtd.</TableTh>
      </TableTr>
    </TableThead>
    <TableTbody>
      <TableTr v-for="item in items" :key="item.sku">
        <TableTd>
          <HoverCard :width="260" position="right" with-arrow :open-delay="200" :close-delay="100">
            <HoverCardTarget>
              <Anchor fz="sm" href="#" @click.prevent>{{ item.name }}</Anchor>
            </HoverCardTarget>
            <HoverCardDropdown p="sm">
              <Stack gap="xs">
                <Image :src="`https://picsum.photos/seed/${item.seed}/520/320`" :h="120" radius="sm" alt="" />
                <Text fz="sm" :fw="600" :lh="1.3">{{ item.name }}</Text>
                <Group justify="space-between">
                  <Text :fw="700" c="var(--ds-primary)">{{ item.price }}</Text>
                  <Rating :model-value="item.rating" :fractions="2" read-only size="xs" />
                </Group>
                <Group justify="space-between">
                  <Text fz="xs" c="var(--ds-text-3)">SKU {{ item.sku }}</Text>
                  <Badge v-if="item.stock > 0" color="evergreen">{{ item.stock }} em estoque</Badge>
                  <Badge v-else color="danger">Esgotado</Badge>
                </Group>
              </Stack>
            </HoverCardDropdown>
          </HoverCard>
        </TableTd>
        <TableTd ta="right">{{ item.sku === 'PV-CAR-26' ? 6 : 4 }}</TableTd>
      </TableTr>
    </TableTbody>
  </Table>
</template>
