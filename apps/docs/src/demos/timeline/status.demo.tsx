import { Text, Timeline } from '@jcdecor/ui';
import { IconAlertTriangle, IconCheck, IconRefresh, IconX } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

export default function Demo() {
  return (
    <Timeline active={3} bulletSize={24}>
      <Timeline.Item bullet={<IconRefresh size={12} />} title="Troca solicitada">
        <Text fz="sm" c="var(--ds-text-2)">Motivo: tamanho incorreto.</Text>
      </Timeline.Item>
      <Timeline.Item bullet={<IconAlertTriangle size={12} color="var(--mantine-color-obsidian-6)" />} color="electric.3" title="Coleta reagendada">
        <Text fz="sm" c="var(--ds-text-2)">Ninguém no endereço na primeira tentativa.</Text>
      </Timeline.Item>
      <Timeline.Item bullet={<IconX size={12} />} color="danger" title="Item avariado na coleta">
        <Text fz="sm" c="var(--ds-text-2)">Abrimos um chamado com a transportadora.</Text>
      </Timeline.Item>
      <Timeline.Item bullet={<IconCheck size={12} />} color="evergreen" title="Reembolso aprovado">
        <Text fz="sm" c="var(--ds-text-2)">R$ 389,70 estornados no cartão.</Text>
      </Timeline.Item>
    </Timeline>
  );
}
