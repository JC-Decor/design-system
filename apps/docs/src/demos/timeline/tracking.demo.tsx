import { Text, Timeline } from '@jcdecor/ui';
import { IconCheck, IconHome, IconPackage, IconTruckDelivery } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

export default function Demo() {
  return (
    <Timeline active={2} bulletSize={28}>
      <Timeline.Item bullet={<IconCheck size={14} />} title="Pedido confirmado">
        <Text fz="sm" c="var(--ds-text-2)">Pagamento via Pix aprovado.</Text>
        <Text fz="xs" c="var(--ds-text-3)" mt={4}>28/09 · 14:32</Text>
      </Timeline.Item>
      <Timeline.Item bullet={<IconPackage size={14} />} title="Em separação">
        <Text fz="sm" c="var(--ds-text-2)">4 caixas de piso vinílico Carvalho Natural.</Text>
        <Text fz="xs" c="var(--ds-text-3)" mt={4}>29/09 · 09:10</Text>
      </Timeline.Item>
      <Timeline.Item bullet={<IconTruckDelivery size={14} />} title="Em trânsito">
        <Text fz="sm" c="var(--ds-text-2)">Saiu do centro de distribuição de Guarulhos.</Text>
        <Text fz="xs" c="var(--ds-text-3)" mt={4}>01/10 · 07:45</Text>
      </Timeline.Item>
      <Timeline.Item bullet={<IconHome size={14} />} title="Entregue" lineVariant="dashed">
        <Text fz="sm" c="var(--ds-text-3)">Previsão: 03/10</Text>
      </Timeline.Item>
    </Timeline>
  );
}
