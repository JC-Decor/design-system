import { Text, Timeline } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 360 };

const eventos = [
  { titulo: 'Orçamento enviado', data: '12/09' },
  { titulo: 'Medição no local', data: '16/09' },
  { titulo: 'Instalação agendada', data: '24/09' },
  { titulo: 'Vistoria final', data: '—' },
];

export default function Demo() {
  return (
    <Timeline active={1} bulletSize={14}>
      {eventos.map((e) => (
        <Timeline.Item key={e.titulo} title={e.titulo}>
          <Text fz="xs" c="var(--ds-text-3)">
            {e.data}
          </Text>
        </Timeline.Item>
      ))}
    </Timeline>
  );
}
