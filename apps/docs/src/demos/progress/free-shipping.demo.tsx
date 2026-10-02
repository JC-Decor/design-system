import { Group, Paper, Progress, Text } from '@jcdecor/ui';
import { IconTruckDelivery } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

const cartTotal = 459;
const freeShippingFrom = 499;

export default function Demo() {
  const missing = freeShippingFrom - cartTotal;
  const value = Math.min((cartTotal / freeShippingFrom) * 100, 100);
  const brl = (amount: number) => amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });

  return (
    <Paper withBorder p="md">
      <Group gap="xs" mb="sm" wrap="nowrap">
        <IconTruckDelivery size={20} color="var(--ds-success)" />
        <Text fz="sm">
          Faltam <strong>{brl(missing)}</strong> para frete grátis
        </Text>
      </Group>
      <Progress value={value} color="evergreen" aria-label="Progresso para frete grátis" />
      <Group justify="space-between" mt={6}>
        <Text fz="xs" c="var(--ds-text-3)">
          {brl(cartTotal)} no carrinho
        </Text>
        <Text fz="xs" c="var(--ds-text-3)">
          {brl(freeShippingFrom)}
        </Text>
      </Group>
    </Paper>
  );
}
