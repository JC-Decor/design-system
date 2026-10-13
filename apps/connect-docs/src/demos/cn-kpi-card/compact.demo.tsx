import { KpiCard, SimpleGrid } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { background: 'page' };

export default function Demo() {
  return (
    <SimpleGrid cols={{ base: 1, xs: 3 }}>
      <KpiCard compact kpi={{ label: 'Vagas abertas', value: '9', delta: '+2', deltaTone: 'pos', tone: 'lavender', icon: 'briefcase' }} />
      <KpiCard compact kpi={{ label: 'Feedbacks no mês', value: '64', delta: '+18%', deltaTone: 'pos', tone: 'blue', icon: 'chat', sparkData: [4, 6, 5, 9, 8, 12, 14] }} />
      <KpiCard compact kpi={{ label: 'Desligamentos', value: '3', delta: '+1', deltaTone: 'neg', tone: 'ink', icon: 'user', spark: 'wave' }} />
    </SimpleGrid>
  );
}
