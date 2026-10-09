import { useState } from 'react';
import { ProductCard } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, background: 'page', maxWidth: 280 };

export default function Demo() {
  const [favorite, setFavorite] = useState(false);

  return (
    <ProductCard
      name="Cortina blackout Linho Cinza 2,80 × 2,30 m"
      category="Cortinas"
      image="https://picsum.photos/seed/cortina/600/600"
      price={199.9}
      favorite={favorite}
      onFavoriteChange={setFavorite}
      onAction={() => {}}
    />
  );
}
