import { NavLink, Paper } from '@jcdecor/ui';
import { IconChevronRight, IconCreditCard, IconMapPin, IconTruckDelivery } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 360 };

export default function Demo() {
  return (
    <Paper withBorder p="xs">
      <NavLink
        href="#"
        label="Endereços"
        description="2 endereços salvos"
        leftSection={<IconMapPin size={20} />}
        rightSection={<IconChevronRight size={16} />}
      />
      <NavLink
        href="#"
        label="Formas de pagamento"
        description="Pix e cartão final 4821"
        leftSection={<IconCreditCard size={20} />}
        rightSection={<IconChevronRight size={16} />}
      />
      <NavLink
        href="#"
        label="Rastrear pedido"
        description="Indisponível — nenhum pedido em trânsito"
        leftSection={<IconTruckDelivery size={20} />}
        disabled
      />
    </Paper>
  );
}
