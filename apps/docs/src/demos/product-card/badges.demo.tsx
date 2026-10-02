import { ProductCard, Tag } from '@jcdecor/ui';
import { IconTruckDelivery } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, background: 'page', maxWidth: 280 };

export default function Demo() {
  return (
    <ProductCard
      name="Painel ripado Freijó 2,70 m"
      category="Painel ripado"
      image="https://picsum.photos/seed/ripado/600/600"
      price={249.9}
      oldPrice={319.9}
      rating={4.5}
      reviews={154}
      badges={[
        <Tag key="frete" tone="success" variant="filled" leftSection={<IconTruckDelivery size={12} />}>
          Frete grátis
        </Tag>,
        <Tag key="novo" tone="primary" variant="filled">
          Novo
        </Tag>,
      ]}
      onAction={() => {}}
    />
  );
}
