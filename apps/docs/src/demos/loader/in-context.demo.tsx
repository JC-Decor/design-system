import { Button, Group, Loader, Paper, Stack, Text } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

export default function Demo() {
  return (
    <Stack>
      <Paper withBorder p="md">
        <Group gap="sm" wrap="nowrap">
          <Loader size="sm" />
          <Text fz="sm" c="var(--ds-text-2)">
            Calculando o frete para o CEP 13010-000…
          </Text>
        </Group>
      </Paper>
      <Group>
        <Button loading>Finalizar compra</Button>
        <Button variant="outline" loading loaderProps={{ type: 'dots' }}>
          Aplicando cupom
        </Button>
      </Group>
    </Stack>
  );
}
