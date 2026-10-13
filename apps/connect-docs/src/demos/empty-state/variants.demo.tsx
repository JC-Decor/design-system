import { EmptyState, Icon, SimpleGrid } from '@jcdecor/connect-ui';

export default function Demo() {
  return (
    <SimpleGrid type="container" cols={{ base: 1, '560px': 2, '720px': 4 }}>
      <EmptyState size="sm" icon={<Icon name="bell" />} title="Sem variante" description="Ícone em tom suave." />
      <EmptyState size="sm" icon={<Icon name="bell" />} withIndicatorBackground title="Fundo neutro" description="withIndicatorBackground" />
      <EmptyState size="sm" icon={<Icon name="bell" />} variant="light" title="light" description="Fundo suave da cor." />
      <EmptyState size="sm" icon={<Icon name="bell" />} variant="filled" title="filled" description="Fundo cheio da cor." />
    </SimpleGrid>
  );
}
