import { GlobalSearchBox, SimpleGrid, Stack, Text } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { background: 'page' };

export default function Demo() {
  return (
    <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
      <Stack gap={6}>
        <Text fz="xs" fw={600} c="var(--ds-text-3)">
          Carregando
        </Text>
        <GlobalSearchBox defaultValue="ferias" loading />
      </Stack>
      <Stack gap={6}>
        <Text fz="xs" fw={600} c="var(--ds-text-3)">
          Sem resultados
        </Text>
        <GlobalSearchBox defaultValue="xpto" groups={[]} />
      </Stack>
      <Stack gap={6}>
        <Text fz="xs" fw={600} c="var(--ds-text-3)">
          Erro
        </Text>
        <GlobalSearchBox defaultValue="ana" error />
      </Stack>
      <Text fz="sm" c="var(--ds-text-3)" style={{ gridColumn: '1 / -1' }}>
        Clique em um dos campos para abrir o painel.
      </Text>
    </SimpleGrid>
  );
}
