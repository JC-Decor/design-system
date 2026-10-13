import { MetricRevealCard, ProgressBar, SimpleGrid, Stack, Text } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { background: 'page' };

export default function Demo() {
  return (
    <SimpleGrid cols={{ base: 1, sm: 3 }}>
      <MetricRevealCard label="Turnover (12 meses)" value="8,4%" description="Abaixo da meta de 10%" status="Estável" trend="-0,6 p.p.">
        <Stack gap={6} mt={4}>
          <Text fz="sm">Comercial 11,2%</Text>
          <ProgressBar value={11.2} max={20} tone="coral" aria-label="Comercial" />
          <Text fz="sm">Operações 6,1%</Text>
          <ProgressBar value={6.1} max={20} tone="green" aria-label="Operações" />
        </Stack>
      </MetricRevealCard>
      <MetricRevealCard label="Tempo médio de contratação" value="23 dias" trend="-4 dias" onClick={() => {}} />
      <MetricRevealCard label="eNPS" value="+42" description="Pesquisa de setembro" />
    </SimpleGrid>
  );
}
