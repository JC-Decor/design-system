import { EmptyState, SimpleGrid } from '@jcdecor/ui';
import { IconHeart } from '@tabler/icons-react';

export default function Demo() {
  return (
    <SimpleGrid type="container" cols={{ base: 1, '560px': 2, '720px': 4 }}>
      <EmptyState size="sm" icon={<IconHeart />} title="Sem variante" description="Ícone em tom suave." />
      <EmptyState size="sm" icon={<IconHeart />} withIndicatorBackground title="Fundo neutro" description="withIndicatorBackground" />
      <EmptyState size="sm" icon={<IconHeart />} variant="light" title="light" description="Fundo suave da cor." />
      <EmptyState size="sm" icon={<IconHeart />} variant="filled" title="filled" description="Fundo cheio da cor." />
    </SimpleGrid>
  );
}
