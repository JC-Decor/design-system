import { ProductCard, SimpleGrid } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { background: 'page', maxWidth: 600 };

export default function Demo() {
  return (
    <SimpleGrid type="container" cols={{ base: 1, '420px': 2 }}>
      <ProductCard
        name="Piso vinílico clicado Nogueira 5 mm"
        category="Pisos vinílicos"
        image="https://picsum.photos/seed/nogueira/600/600"
        price={139.9}
        oldPrice={169.9}
        unit="/m²"
        pixDiscount={5}
        installments={{ count: 10 }}
        onAction={() => {}}
      />
      <ProductCard
        name="Papel de parede Folhagens Tropicais"
        category="Papel de parede"
        image="https://picsum.photos/seed/folhagem/600/600"
        imageRatio={4 / 5}
        price={149.9}
        unit="/rolo"
        pixDiscount={10}
        installments={{ count: 3 }}
        showDiscount={false}
        onAction={() => {}}
        actionLabel="Adicionar ao carrinho"
      />
    </SimpleGrid>
  );
}
