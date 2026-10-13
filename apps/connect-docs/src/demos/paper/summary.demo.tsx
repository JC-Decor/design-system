import { Divider, Group, Paper, Stack, Text } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 380, background: 'page' };

export default function Demo() {
  return (
    <Paper withBorder p="lg" w="100%">
      <Text fz={16} fw={700} mb="sm">
        Banco de horas · outubro
      </Text>
      <Stack gap={6}>
        <Group justify="space-between">
          <Text fz="sm" c="var(--ds-text-2)">Saldo anterior</Text>
          <Text fz="sm">+6h10</Text>
        </Group>
        <Group justify="space-between">
          <Text fz="sm" c="var(--ds-text-2)">Horas extras</Text>
          <Text fz="sm" c="var(--ds-success)">+4h30</Text>
        </Group>
        <Group justify="space-between">
          <Text fz="sm" c="var(--ds-text-2)">Compensações</Text>
          <Text fz="sm" c="var(--ds-error)">−2h00</Text>
        </Group>
      </Stack>
      <Divider my="sm" />
      <Group justify="space-between">
        <Text fw={700}>Saldo atual</Text>
        <Text fw={700}>+8h40</Text>
      </Group>
    </Paper>
  );
}
