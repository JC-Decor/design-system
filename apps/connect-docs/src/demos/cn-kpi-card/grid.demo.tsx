import { KpiCard, SimpleGrid } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { background: 'page' };

export default function Demo() {
  return (
    <SimpleGrid cols={{ base: 1, xs: 2, md: 4 }}>
      <KpiCard kpi={{ label: 'Colaboradores ativos', value: '248', delta: '+4,2%', deltaTone: 'pos', sub: 'vs. set', tone: 'blue', icon: 'users', spark: 'up' }} onMore={() => {}} />
      <KpiCard kpi={{ label: 'Turnover', value: '2,1%', delta: '-0,4 p.p.', deltaTone: 'neg', sub: 'vs. set', tone: 'coral', icon: 'arrow-dn', spark: 'down' }} onMore={() => {}} />
      <KpiCard kpi={{ label: 'Horas de treinamento', value: '1.320h', delta: '+12%', deltaTone: 'pos', tone: 'green', icon: 'book', spark: 'wave' }} />
      <KpiCard kpi={{ label: 'Absenteísmo', value: '1,8%', delta: 'estável', deltaTone: 'neu', tone: 'yellow', icon: 'calendar', spark: 'flat' }} />
    </SimpleGrid>
  );
}
