import { AnimatedSection, Button, MetricSummaryCard, SimpleGrid } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { background: 'page' };

export default function Demo() {
  return (
    <AnimatedSection
      title="Resumo da equipe"
      description="Indicadores atualizados hoje às 08:00"
      actions={<Button variant="ghost">Exportar</Button>}
    >
      <SimpleGrid cols={{ base: 1, sm: 3 }}>
        <MetricSummaryCard tone="blue" icon="users" label="Pessoas" value="12" />
        <MetricSummaryCard tone="green" icon="palm" label="De férias" value="2" />
        <MetricSummaryCard tone="yellow" icon="clock" label="Ajustes de ponto" value="5" sub="pendentes" />
      </SimpleGrid>
    </AnimatedSection>
  );
}
