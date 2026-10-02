import { PromoBanner, Stack } from '@jcdecor/ui';
import { IconTruckDelivery, IconDiscount2 } from '@tabler/icons-react';

export default function Demo() {
  return (
    <Stack gap="sm">
      <PromoBanner radius="md" icon={<IconTruckDelivery size={20} />} highlight="R$ 299">
        Frete grátis acima de
      </PromoBanner>
      <PromoBanner variant="electric" radius="md" icon={<IconDiscount2 size={20} />}>
        Papel de parede com <strong>10% OFF</strong> no Pix
      </PromoBanner>
    </Stack>
  );
}
