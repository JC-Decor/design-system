import { Button, Group, Popover, Text, TextInput } from '@jcdecor/ui';
import { IconTruckDelivery } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Popover width={300} position="bottom" withArrow trapFocus>
      <Popover.Target>
        <Button variant="outline" leftSection={<IconTruckDelivery size={18} />}>
          Calcular frete
        </Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text fz="sm" fw={600} mb="xs">
          Informe seu CEP
        </Text>
        <Group gap="xs" wrap="nowrap" align="flex-end">
          <TextInput placeholder="00000-000" size="sm" aria-label="CEP" style={{ flex: 1 }} />
          <Button size="sm">OK</Button>
        </Group>
        <Text fz="xs" c="var(--ds-text-3)" mt="xs">
          Frete grátis para o Sudeste acima de R$ 499.
        </Text>
      </Popover.Dropdown>
    </Popover>
  );
}
