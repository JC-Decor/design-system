import { KpiCard, Group } from '@jcdecor/ui';
import { Sparkline } from '@jcdecor/ui/charts';

export default function Demo() {
  return (
    <Group align="stretch">
      <KpiCard
        label="Sessões (7d)"
        value={9812}
        delta={4.3}
        w={240}
        chart={<Sparkline data={[820, 940, 1100, 980, 1320, 1410, 1540]} />}
      />
      <KpiCard
        label="Carrinhos abandonados"
        value={312}
        delta={9.1}
        invertDelta
        w={240}
        chart={<Sparkline data={[40, 38, 45, 50, 41, 47, 51]} color="danger.6" />}
      />
    </Group>
  );
}
