import { Group, Marquee, Paper, Text } from '@jcdecor/ui';
import { IconStarFilled } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

const avaliacoes = [
  { nome: 'Mariana S.', texto: 'O piso ficou lindo e a instalação foi rápida.' },
  { nome: 'Carlos L.', texto: 'Papel de parede de ótima qualidade, chegou antes do prazo.' },
  { nome: 'Ana R.', texto: 'A cortina blackout escureceu o quarto por completo.' },
];

export default function Demo() {
  return (
    <Marquee orientation="vertical" h={260} w={320} gap="sm" duration={25000} pauseOnHover reverse fadeEdgeColor="var(--ds-surface)">
      {avaliacoes.map((a) => (
        <Paper key={a.nome} withBorder p="md">
          <Group gap={2} c="electric.4" mb={4}>
            {[1, 2, 3, 4, 5].map((n) => (
              <IconStarFilled key={n} size={12} />
            ))}
          </Group>
          <Text fz="sm">{a.texto}</Text>
          <Text fz="xs" c="var(--ds-text-3)" mt={4}>
            {a.nome}
          </Text>
        </Paper>
      ))}
    </Marquee>
  );
}
