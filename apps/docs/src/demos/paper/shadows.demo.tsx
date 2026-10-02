import { Paper, SimpleGrid, Text } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { background: 'page' };

export default function Demo() {
  return (
    <SimpleGrid type="container" cols={{ base: 2, '560px': 4 }} spacing="lg" w="100%">
      {(['xs', 'sm', 'md', 'lg'] as const).map((shadow) => (
        <Paper key={shadow} shadow={shadow} p="lg" ta="center">
          <Text fw={600}>shadow="{shadow}"</Text>
        </Paper>
      ))}
    </SimpleGrid>
  );
}
