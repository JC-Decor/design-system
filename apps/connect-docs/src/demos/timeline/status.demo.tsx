import { Icon, Text, Timeline } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

export default function Demo() {
  return (
    <Timeline active={3} bulletSize={24}>
      <Timeline.Item bullet={<Icon name="palm" size={12} />} title="Férias solicitadas">
        <Text fz="sm" c="var(--ds-text-2)">03/11 a 22/11 · 20 dias.</Text>
      </Timeline.Item>
      <Timeline.Item bullet={<Icon name="clock" size={12} c="var(--mantine-color-yellow-9)" />} color="yellow.4" title="Aguardando gestor">
        <Text fz="sm" c="var(--ds-text-2)">Paula Andrade pediu para ajustar o início.</Text>
      </Timeline.Item>
      <Timeline.Item bullet={<Icon name="x" size={12} />} color="coral" title="Primeira data recusada">
        <Text fz="sm" c="var(--ds-text-2)">Conflito com o fechamento do trimestre.</Text>
      </Timeline.Item>
      <Timeline.Item bullet={<Icon name="check" size={12} />} color="green" title="Férias aprovadas">
        <Text fz="sm" c="var(--ds-text-2)">Pagamento previsto para 31/10.</Text>
      </Timeline.Item>
    </Timeline>
  );
}
