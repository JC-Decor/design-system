import { Group, Icon, Marquee, Paper, Text } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

const reconhecimentos = [
  { de: 'Carlos Lima', para: 'Mariana Souza', texto: 'Conduziu a integração dos novos colaboradores com muito cuidado.' },
  { de: 'Ana Ribeiro', para: 'João Pereira', texto: 'Fechou o banco de horas da equipe antes do prazo.' },
  { de: 'Beatriz Costa', para: 'Ana Ribeiro', texto: 'Ótimo apoio no treinamento de liderança.' },
];

export default function Demo() {
  return (
    <Marquee orientation="vertical" h={260} w={320} gap="sm" duration={25000} pauseOnHover reverse fadeEdgeColor="var(--ds-surface)">
      {reconhecimentos.map((r) => (
        <Paper key={r.para + r.de} withBorder p="md">
          <Group gap={6} c="var(--cn-tone-yellow-fg)" mb={4}>
            <Icon name="award" size={14} />
            <Text fz="xs" fw={700}>
              {r.para}
            </Text>
          </Group>
          <Text fz="sm">{r.texto}</Text>
          <Text fz="xs" c="var(--ds-text-3)" mt={4}>
            por {r.de}
          </Text>
        </Paper>
      ))}
    </Marquee>
  );
}
