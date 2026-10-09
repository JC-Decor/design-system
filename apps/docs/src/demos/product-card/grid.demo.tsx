import { ProductCard, SimpleGrid, Tag } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { background: 'page' };

const products = [
  { id: 1, seed: 'carvalho', name: 'Piso vinílico autocolante Carvalho Natural', category: 'Pisos vinílicos', price: 89.9, oldPrice: 119.9, unit: '/m²', rating: 4.5, reviews: 312 },
  { id: 2, seed: 'linho', name: 'Papel de parede Linho Bege texturizado', category: 'Papel de parede', price: 129.9, unit: '/rolo', rating: 4.8, reviews: 87, isNew: true },
  { id: 3, seed: 'freijo', name: 'Painel ripado Freijó 2,70 m', category: 'Painel ripado', price: 249.9, oldPrice: 289.9, rating: 4.6, reviews: 154 },
];

export default function Demo() {
  return (
    <SimpleGrid type="container" cols={{ base: 1, '420px': 2, '560px': 3 }}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          href="#"
          image={`https://picsum.photos/seed/${product.seed}/600/600`}
          name={product.name}
          category={product.category}
          price={product.price}
          oldPrice={product.oldPrice}
          unit={product.unit}
          rating={product.rating}
          reviews={product.reviews}
          badges={product.isNew ? [<Tag key="new" tone="primary" variant="filled">Novo</Tag>] : undefined}
          installments={{ count: 6 }}
          onAction={() => {}}
          actionLabel="Adicionar"
        />
      ))}
    </SimpleGrid>
  );
}
