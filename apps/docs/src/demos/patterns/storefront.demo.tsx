import { useMemo, useState } from 'react';
import {
  ActionIcon,
  Chip,
  Group,
  Indicator,
  PromoBanner,
  ProductCard,
  Select,
  SimpleGrid,
  Stack,
  Tag,
  Text,
  Title,
} from '@jcdecor/ui';
import { IconShoppingCart, IconTruck } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { background: 'page', withoutPadding: true };

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
  badges?: React.ReactNode[];
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
    badges: [
      <Tag key="f" tone="success">
        Frete grátis
      </Tag>,
    ],
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
    badges: [
      <Tag key="n" tone="primary">
        Novo
      </Tag>,
    ],
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
    badges: [
      <Tag key="m" tone="neutral">
        Sob medida
      </Tag>,
    ],
  },
];

const categories = ['Todos', 'Pisos', 'Papel de parede', 'Cortinas', 'Grama sintética', 'Painéis'];

export default function Demo() {
  const [category, setCategory] = useState('Todos');
  const [sort, setSort] = useState('relevancia');
  const [favorites, setFavorites] = useState<string[]>(['5']);
  const [cart, setCart] = useState(0);

  const visible = useMemo(() => {
    const list = category === 'Todos' ? products : products.filter((p) => p.category === category);
    if (sort === 'menor') return [...list].sort((a, b) => a.price - b.price);
    if (sort === 'maior') return [...list].sort((a, b) => b.price - a.price);
    if (sort === 'avaliacao') return [...list].sort((a, b) => b.rating - a.rating);
    return list;
  }, [category, sort]);

  return (
    <div>
      <PromoBanner icon={<IconTruck size={18} />} highlight="PRIMEIRACOMPRA" withCloseButton>
        Frete grátis acima de R$ 299 e 10% off na primeira compra com o cupom
      </PromoBanner>

      <Stack p="lg" gap="lg">
        <Group justify="space-between" align="flex-end">
          <div>
            <Text fz="sm" c="var(--ds-text-3)">
              Início / Ambientes / Sala
            </Text>
            <Title order={2} mt={4}>
              Decoração para sala
            </Title>
            <Text c="var(--ds-text-2)" fz="sm">
              {visible.length} produtos
            </Text>
          </div>
          <Group gap="sm">
            <Select
              w={190}
              value={sort}
              onChange={(v) => v && setSort(v)}
              allowDeselect={false}
              aria-label="Ordenar por"
              data={[
                { value: 'relevancia', label: 'Mais relevantes' },
                { value: 'menor', label: 'Menor preço' },
                { value: 'maior', label: 'Maior preço' },
                { value: 'avaliacao', label: 'Melhor avaliados' },
              ]}
            />
            <Indicator label={cart} size={18} disabled={cart === 0} offset={4}>
              <ActionIcon variant="default" size="lg" aria-label="Carrinho">
                <IconShoppingCart size={18} />
              </ActionIcon>
            </Indicator>
          </Group>
        </Group>

        <Chip.Group value={category} onChange={(v) => setCategory(v as string)}>
          <Group gap="xs">
            {categories.map((c) => (
              <Chip key={c} value={c} variant="outline">
                {c}
              </Chip>
            ))}
          </Group>
        </Chip.Group>

        <SimpleGrid
          type="container"
          cols={{ base: 1, '440px': 2, '600px': 3, '900px': 4 }}
          spacing="lg"
        >
          {visible.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              category={product.category}
              image={product.image}
              price={product.price}
              oldPrice={product.oldPrice}
              unit={product.unit}
              installments={{ count: product.price > 150 ? 6 : 3 }}
              pixDiscount={5}
              rating={product.rating}
              reviews={product.reviews}
              badges={product.badges}
              href={`#produto-${product.id}`}
              favorite={favorites.includes(product.id)}
              onFavoriteChange={(fav) =>
                setFavorites((f) =>
                  fav ? [...f, product.id] : f.filter((id) => id !== product.id),
                )
              }
              actionLabel="Adicionar"
              onAction={() => setCart((c) => c + 1)}
            />
          ))}
        </SimpleGrid>
      </Stack>
    </div>
  );
}
