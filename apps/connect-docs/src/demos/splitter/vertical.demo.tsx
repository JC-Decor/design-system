import { Paper, Splitter, Text } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { withoutPadding: true };

export default function Demo() {
  return (
    <Paper h={320} radius={0}>
      <Splitter orientation="vertical" h="100%">
        <Splitter.Pane defaultSize={60} p="md">
          <Text fw={700}>Pré-visualização</Text>
          <Text fz="sm" c="var(--ds-text-2)">
            Como o comunicado “Campanha de vacinação” aparece no feed dos colaboradores.
          </Text>
        </Splitter.Pane>
        <Splitter.Pane defaultSize={40} min={20} p="md">
          <Text fw={700}>Configurações</Text>
          <Text fz="sm" c="var(--ds-text-2)">
            Público: todas as equipes · Publicação: 21/10 às 9h
          </Text>
        </Splitter.Pane>
      </Splitter>
    </Paper>
  );
}
