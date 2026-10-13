import { AreaChart, Card, CardHeader, ChartLegend } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

const horas = [
  { m: 'Jan', extras: 120, faltas: 32 },
  { m: 'Fev', extras: 98, faltas: 40 },
  { m: 'Mar', extras: 140, faltas: 28 },
  { m: 'Abr', extras: 160, faltas: 36 },
  { m: 'Mai', extras: 132, faltas: 22 },
  { m: 'Jun', extras: 176, faltas: 30 },
  { m: 'Jul', extras: 150, faltas: 18 },
];

export default function Demo() {
  return (
    <Card>
      <CardHeader
        title="Horas extras × faltas"
        sub="Equipe de Operações · 2026"
        mb={14}
        actions={<ChartLegend items={[{ label: 'Horas extras', color: 'var(--cn-chart-2)' }, { label: 'Faltas', dashed: true }]} />}
      />
      <AreaChart
        data={horas}
        keys={['extras', 'faltas']}
        primary="var(--cn-chart-2)"
        height={200}
        labels={[
          { key: 'extras', text: 'Horas extras' },
          { key: 'faltas', text: 'Faltas' },
        ]}
        tipTitle={(p) => `${p.m} · 2026`}
      />
    </Card>
  );
}
