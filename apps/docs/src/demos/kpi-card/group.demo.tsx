import { KpiCard, KpiGroup, formatCurrency } from '@jcdecor/ui';
import { IconCash, IconEye, IconReceipt, IconArrowBackUp } from '@tabler/icons-react';

export default function Demo() {
  return (
    <KpiGroup>
      <KpiCard label="Receita" value={formatCurrency(184230)} delta={12.4} icon={<IconCash size={18} />} />
      <KpiCard label="Ticket médio" value={formatCurrency(389.9)} delta={2.1} icon={<IconReceipt size={18} />} />
      <KpiCard label="Visitas" value={54959} delta={-5.6} icon={<IconEye size={18} />} />
      <KpiCard label="Devoluções" value="1,8%" delta={-0.4} invertDelta icon={<IconArrowBackUp size={18} />} deltaLabel="queda é bom" />
    </KpiGroup>
  );
}
