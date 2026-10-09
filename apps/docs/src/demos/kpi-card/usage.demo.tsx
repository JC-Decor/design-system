import { KpiCard, Group } from '@jcdecor/ui';

export default function Demo() {
  return (
    <Group align="stretch">
      <KpiCard label="Acessos (60d)" value={54959} />
      <KpiCard label="Variação" value="-5,6%" delta={-5.6} colorValue />
      <KpiCard label="Pedidos" value={1284} delta={8.2} deltaLabel="vs. mês anterior" />
    </Group>
  );
}
