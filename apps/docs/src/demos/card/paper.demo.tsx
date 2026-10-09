import { Paper, SimpleGrid, Text } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { background: 'page' };

export default function Demo() {
  return (
    <SimpleGrid type="container" cols={{ base: 1, '560px': 3 }} w="100%">
      <Paper p="lg">
        <Text fw={600}>Padrão</Text>
        <Text fz="sm" c="var(--ds-text-3)">
          Só a superfície
        </Text>
      </Paper>
      <Paper withBorder p="lg">
        <Text fw={600}>withBorder</Text>
        <Text fz="sm" c="var(--ds-text-3)">
          Borda --ds-border-soft
        </Text>
      </Paper>
      <Paper shadow="md" p="lg">
        <Text fw={600}>shadow="md"</Text>
        <Text fz="sm" c="var(--ds-text-3)">
          Elevação média
        </Text>
      </Paper>
    </SimpleGrid>
  );
}
