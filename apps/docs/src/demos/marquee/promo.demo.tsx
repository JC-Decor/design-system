import { Group, Marquee, Text } from '@jcdecor/ui';
import { IconCreditCard, IconDiscount, IconTruckDelivery } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { withoutPadding: true };

const mensagens = [
  { icon: IconTruckDelivery, texto: 'Frete grátis acima de R$ 499' },
  { icon: IconCreditCard, texto: 'Até 10x sem juros' },
  { icon: IconDiscount, texto: '5% off no Pix' },
];

export default function Demo() {
  return (
    <Marquee bg="var(--ds-accent)" c="var(--dc-obsidian)" py="sm" gap="xl" duration={30000} pauseOnHover fadeEdges={false}>
      {mensagens.map(({ icon: Icon, texto }) => (
        <Group key={texto} gap={6} wrap="nowrap">
          <Icon size={18} />
          <Text fz="sm" fw={600} style={{ whiteSpace: 'nowrap' }}>
            {texto}
          </Text>
        </Group>
      ))}
    </Marquee>
  );
}
