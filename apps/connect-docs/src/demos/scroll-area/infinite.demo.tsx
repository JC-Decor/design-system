import { Loader, Paper, ScrollArea, Text } from '@jcdecor/connect-ui';
import { useState } from 'react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

const atividades = [
  'Mariana Souza registrou o ponto',
  'Carlos Lima aprovou férias de João Pereira',
  'Ana Ribeiro enviou o atestado médico',
  'Beatriz Costa concluiu o treinamento de LGPD',
  'Novo comunicado publicado pelo RH',
];

export default function Demo() {
  const [items, setItems] = useState(10);
  const [loading, setLoading] = useState(false);

  const loadMore = () => {
    if (loading || items >= 40) return;
    setLoading(true);
    setTimeout(() => {
      setItems((n) => n + 10);
      setLoading(false);
    }, 600);
  };

  return (
    <Paper withBorder w="100%">
      <ScrollArea h={240} px="md" onBottomReached={loadMore}>
        {Array.from({ length: items }, (_, i) => (
          <Text key={i} fz="sm" py="xs" style={{ borderBottom: '1px solid var(--ds-border-soft)' }}>
            {atividades[i % atividades.length]}{' '}
            <Text span fz="xs" c="var(--ds-text-3)">
              · há {i + 1} h
            </Text>
          </Text>
        ))}
        {loading && <Loader size="sm" my="sm" mx="auto" display="block" />}
      </ScrollArea>
    </Paper>
  );
}
