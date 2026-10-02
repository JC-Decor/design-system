import { Loader, Paper, ScrollArea, Text } from '@jcdecor/ui';
import { useState } from 'react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

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
            Avaliação #{i + 1} — produto chegou bem embalado
          </Text>
        ))}
        {loading && <Loader size="sm" my="sm" mx="auto" display="block" />}
      </ScrollArea>
    </Paper>
  );
}
