<script lang="ts">
export const meta = { background: 'page', withoutPadding: true };
</script>

<script setup lang="ts">
import { computed, ref } from 'vue';
import {
  ActionIcon,
  Chip,
  ChipGroup,
  Group,
  Indicator,
  ProductCard,
  PromoBanner,
  Select,
  SimpleGrid,
  Stack,
  Tag,
  Text,
  Title,
  type TagTone,
} from '@jcdecor/vue';
import { IconShoppingCart, IconTruck } from '@tabler/icons-vue';

interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  price: number;
  oldPrice?: number;
  unit?: string;
  rating: number;
  reviews: number;
  badge?: { tone: TagTone; label: string };
}

const products: Product[] = [
  {
    id: '1',
    name: 'Piso vinílico Carvalho Natural em régua',
    category: 'Pisos',
    image: 'https://picsum.photos/seed/carvalho/600/600',
    price: 89.9,
    oldPrice: 109.9,
    unit: '/m²',
    rating: 4.5,
    reviews: 212,
    badge: { tone: 'success', label: 'Frete grátis' },
  },
  {
    id: '2',
    name: 'Papel de parede Linho Areia',
    category: 'Papel de parede',
    image: 'https://picsum.photos/seed/linho/600/600',
    price: 79.9,
    unit: '/rolo',
    rating: 4.7,
    reviews: 98,
    badge: { tone: 'primary', label: 'Novo' },
  },
  {
    id: '3',
    name: 'Cortina blackout Cinza 2,80 × 2,50 m',
    category: 'Cortinas',
    image: 'https://picsum.photos/seed/cortina/600/600',
    price: 249.9,
    oldPrice: 299.9,
    rating: 4.3,
    reviews: 154,
  },
  {
    id: '4',
    name: 'Grama sintética 25 mm Garden',
    category: 'Grama sintética',
    image: 'https://picsum.photos/seed/grama/600/600',
    price: 59.9,
    unit: '/m²',
    rating: 4.6,
    reviews: 77,
  },
  {
    id: '5',
    name: 'Painel ripado Freijó 2,70 m',
    category: 'Painéis',
    image: 'https://picsum.photos/seed/ripado/600/600',
    price: 189.9,
    oldPrice: 219.9,
    rating: 4.8,
    reviews: 63,
  },
  {
    id: '6',
    name: 'Piso vinílico Cimento Queimado em manta',
    category: 'Pisos',
    image: 'https://picsum.photos/seed/cimento/600/600',
    price: 69.9,
    unit: '/m²',
    rating: 4.2,
    reviews: 41,
  },
  {
    id: '7',
    name: 'Papel de parede Folhagens Verde',
    category: 'Papel de parede',
    image: 'https://picsum.photos/seed/folhagem/600/600',
    price: 94.9,
    oldPrice: 119.9,
    unit: '/rolo',
    rating: 4.9,
    reviews: 132,
  },
  {
    id: '8',
    name: 'Cortina de linho Off-white sob medida',
    category: 'Cortinas',
    image: 'https://picsum.photos/seed/linhocortina/600/600',
    price: 329.9,
    rating: 4.4,
    reviews: 28,
    badge: { tone: 'neutral', label: 'Sob medida' },
  },
];

const categories = ['Todos', 'Pisos', 'Papel de parede', 'Cortinas', 'Grama sintética', 'Painéis'];

const category = ref('Todos');
const sort = ref('relevancia');
const favorites = ref<string[]>(['5']);
const cart = ref(0);

const visible = computed(() => {
  const list = category.value === 'Todos' ? products : products.filter((p) => p.category === category.value);
  if (sort.value === 'menor') return [...list].sort((a, b) => a.price - b.price);
  if (sort.value === 'maior') return [...list].sort((a, b) => b.price - a.price);
  if (sort.value === 'avaliacao') return [...list].sort((a, b) => b.rating - a.rating);
  return list;
});

function setFavorite(id: string, favorite: boolean) {
  favorites.value = favorite ? [...favorites.value, id] : favorites.value.filter((f) => f !== id);
}
</script>

<template>
  <div>
    <PromoBanner highlight="PRIMEIRACOMPRA" with-close-button>
      <template #icon><IconTruck :size="18" /></template>
      Frete grátis acima de R$ 299 e 10% off na primeira compra com o cupom
    </PromoBanner>

    <Stack p="lg" gap="lg">
      <Group justify="space-between" align="flex-end">
        <div>
          <Text fz="sm" c="var(--ds-text-3)">Início / Ambientes / Sala</Text>
          <Title :order="2" :mt="4">Decoração para sala</Title>
          <Text c="var(--ds-text-2)" fz="sm">{{ visible.length }} produtos</Text>
        </div>
        <Group gap="sm">
          <Select
            v-model="sort"
            :w="190"
            :allow-deselect="false"
            aria-label="Ordenar por"
            :data="[
              { value: 'relevancia', label: 'Mais relevantes' },
              { value: 'menor', label: 'Menor preço' },
              { value: 'maior', label: 'Maior preço' },
              { value: 'avaliacao', label: 'Melhor avaliados' },
            ]"
          />
          <Indicator :label="cart" :size="18" :disabled="cart === 0" :offset="4">
            <ActionIcon variant="default" size="lg" aria-label="Carrinho">
              <IconShoppingCart :size="18" />
            </ActionIcon>
          </Indicator>
        </Group>
      </Group>

      <ChipGroup v-model="category">
        <Group gap="xs">
          <Chip v-for="c in categories" :key="c" :value="c" variant="outline">{{ c }}</Chip>
        </Group>
      </ChipGroup>

      <SimpleGrid type="container" :cols="{ base: 1, '440px': 2, '600px': 3, '900px': 4 }" spacing="lg">
        <ProductCard
          v-for="product in visible"
          :key="product.id"
          :name="product.name"
          :category="product.category"
          :image="product.image"
          :price="product.price"
          :old-price="product.oldPrice"
          :unit="product.unit"
          :installments="{ count: product.price > 150 ? 6 : 3 }"
          :pix-discount="5"
          :rating="product.rating"
          :reviews="product.reviews"
          :href="`#produto-${product.id}`"
          :favorite="favorites.includes(product.id)"
          action-label="Adicionar"
          @update:favorite="setFavorite(product.id, $event)"
          @action="cart++"
        >
          <template v-if="product.badge" #badges>
            <Tag :tone="product.badge.tone">{{ product.badge.label }}</Tag>
          </template>
        </ProductCard>
      </SimpleGrid>
    </Stack>
  </div>
</template>
