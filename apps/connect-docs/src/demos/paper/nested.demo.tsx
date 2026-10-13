import { Paper, Stack, Text } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { background: 'page' };

export default function Demo() {
  return (
    <Paper shadow="sm" p="lg" w="100%">
      <Text fz={16} fw={700}>
        Dados de lotação
      </Text>
      <Stack gap="sm" mt="sm">
        <Paper withBorder p="md">
          <Text fz="sm">Equipe Comercial · Sede São Paulo · Gestor: Carlos Lima</Text>
        </Paper>
        <Paper p="md" bg="var(--ds-surface-2)">
          <Text fz="sm" c="var(--ds-text-2)">
            Dentro de uma superfície, use borda ou --ds-surface-2 em vez de outra sombra.
          </Text>
        </Paper>
      </Stack>
    </Paper>
  );
}
