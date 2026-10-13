import { Paper, Splitter, Text } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { withoutPadding: true };

export default function Demo() {
  return (
    <Paper h={260} radius={0}>
      <Splitter h="100%">
        <Splitter.Pane defaultSize="240px" min="160px" max="360px" collapsible collapseThreshold="100px" p="md">
          <Text fw={700}>Filtros</Text>
          <Text fz="sm" c="var(--ds-text-2)">
            Equipe, status e gestor. Painel fixo em px: arraste até o fim para recolher.
          </Text>
        </Splitter.Pane>
        <Splitter.Pane defaultSize={100} p="md">
          <Text fw={700}>Colaboradores</Text>
          <Text fz="sm" c="var(--ds-text-2)">
            Este painel é flexível e ocupa o espaço restante.
          </Text>
        </Splitter.Pane>
      </Splitter>
    </Paper>
  );
}
