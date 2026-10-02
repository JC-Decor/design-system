import { KpiCard, Group } from '@jcdecor/ui';

export default function Demo() {
  return (
    <Group>
      <KpiCard label="Acessos (60d)" value={0} loading />
      <KpiCard label="Conversão" value={0} loading />
    </Group>
  );
}
