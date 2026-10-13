import { Text, Timeline } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 360 };

const etapas = [
  { titulo: 'Autoavaliação', data: '01/10' },
  { titulo: 'Avaliação do gestor', data: '10/10' },
  { titulo: 'Calibração', data: '20/10' },
  { titulo: 'Feedback 1:1', data: '—' },
];

export default function Demo() {
  return (
    <Timeline active={1} bulletSize={14}>
      {etapas.map((e) => (
        <Timeline.Item key={e.titulo} title={e.titulo}>
          <Text fz="xs" c="var(--ds-text-3)">
            {e.data}
          </Text>
        </Timeline.Item>
      ))}
    </Timeline>
  );
}
