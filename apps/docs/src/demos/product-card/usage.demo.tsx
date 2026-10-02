import { ProductCard } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, background: 'page', maxWidth: 280 };

export default function Demo() {
  return (
    <ProductCard
      name="Piso vinílico autocolante Carvalho Natural 2 mm"
      category="Pisos vinílicos"
      image="https://picsum.photos/seed/carvalho/600/600"
      href="#"
      price={89.9}
      oldPrice={119.9}
      unit="/m²"
      onAction={() => {}}
    />
  );
}
