import { MetricSummaryCard, SimpleGrid } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { background: 'page' };

export default function Demo() {
  return (
    <SimpleGrid cols={{ base: 1, xs: 2, md: 3 }}>
      <MetricSummaryCard tone="blue" icon="users" label="Colaboradores" value="248" sub="+3 no mês" />
      <MetricSummaryCard tone="lavender" icon="user-plus" label="Vagas abertas" value="9" sub="4 em entrevista" />
      <MetricSummaryCard tone="green" icon="check" label="Férias aprovadas" value="17" sub="outubro" />
      <MetricSummaryCard tone="yellow" icon="clock" label="Ajustes de ponto" value="14" sub="pendentes" />
      <MetricSummaryCard tone="coral" icon="doc-clock" label="Documentos vencendo" value="5" sub="em 30 dias" />
      <MetricSummaryCard tone="ink" icon="shirt" label="Uniformes" value="32" sub="a entregar" />
    </SimpleGrid>
  );
}
