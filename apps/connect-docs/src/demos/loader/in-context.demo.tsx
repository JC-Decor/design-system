import { Button, Group, Loader, Paper, Stack, Text } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

export default function Demo() {
  return (
    <Stack>
      <Paper withBorder p="md">
        <Group gap="sm" wrap="nowrap">
          <Loader size="sm" />
          <Text fz="sm" c="var(--ds-text-2)">
            Calculando o saldo do banco de horas de outubro…
          </Text>
        </Group>
      </Paper>
      <Group>
        <Button loading>Enviar solicitação</Button>
        <Button variant="outline" loading loaderProps={{ type: 'dots' }}>
          Gerando holerite
        </Button>
      </Group>
    </Stack>
  );
}
