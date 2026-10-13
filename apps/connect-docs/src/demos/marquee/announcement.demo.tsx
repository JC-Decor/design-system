import { Group, Icon, Marquee, Text } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { withoutPadding: true };

const comunicados = [
  { icon: 'megaphone', texto: 'Campanha de vacinação na sede: 22 e 23/10' },
  { icon: 'calendar', texto: 'Feriado de 02/11: escala publicada' },
  { icon: 'doc', texto: 'Informe de rendimentos disponível em Documentos' },
];

export default function Demo() {
  return (
    <Marquee bg="var(--cn-navy-600)" c="white" py="sm" gap="xl" duration={30000} pauseOnHover fadeEdges={false}>
      {comunicados.map((c) => (
        <Group key={c.texto} gap={6} wrap="nowrap">
          <Icon name={c.icon} size={16} />
          <Text fz="sm" fw={600} style={{ whiteSpace: 'nowrap' }}>
            {c.texto}
          </Text>
        </Group>
      ))}
    </Marquee>
  );
}
