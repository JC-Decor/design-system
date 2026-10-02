import { CouponCode } from '@jcdecor/ui';
import { notifications } from '@mantine/notifications';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 380 };

export default function Demo() {
  return (
    <CouponCode
      code="PISO10"
      description="10% OFF em pisos vinílicos"
      copyLabel="Copiar cupom"
      copiedLabel="Copiado"
      onCopy={(code) =>
        notifications.show({ color: 'evergreen', title: 'Cupom copiado', message: `Cole ${code} no carrinho para aplicar o desconto.` })
      }
    />
  );
}
