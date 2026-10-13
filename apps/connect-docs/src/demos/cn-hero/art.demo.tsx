import { HeroArt, Paper } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { maxWidth: 460, centered: true };

export default function Demo() {
  return (
    <Paper withBorder radius="lg" h={300}>
      <HeroArt
        people={[
          { seed: 'LR', tone: 'blue' },
          { seed: 'GM', tone: 'green' },
          { seed: 'BP', tone: 'coral' },
          { seed: 'CF', tone: 'yellow' },
          { seed: 'AS', tone: 'lavender' },
        ]}
        tags={[
          { label: '3 contratações no mês', tone: 'blue' },
          { label: 'Clima: +42 eNPS', tone: 'green' },
        ]}
      />
    </Paper>
  );
}
