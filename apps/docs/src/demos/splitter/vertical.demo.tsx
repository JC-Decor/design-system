import { Paper, Splitter, Text } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { withoutPadding: true };

export default function Demo() {
  return (
    <Paper h={320} radius={0}>
      <Splitter orientation="vertical" h="100%">
        <Splitter.Pane defaultSize={60} p="md">
          <Text fw={600}>Pré-visualização</Text>
          <Text fz="sm" c="var(--ds-text-2)">
            Simulação do papel de parede aplicado na parede da sala.
          </Text>
        </Splitter.Pane>
        <Splitter.Pane defaultSize={40} min={20} p="md">
          <Text fw={600}>Propriedades</Text>
          <Text fz="sm" c="var(--ds-text-2)">
            Largura do rolo: 0,53 m · Rendimento: 5 m²
          </Text>
        </Splitter.Pane>
      </Splitter>
    </Paper>
  );
}
