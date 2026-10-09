import { Box, Group, Indicator } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

const posicoes = ['top-start', 'top-center', 'top-end', 'middle-end', 'bottom-end', 'bottom-start'] as const;

export default function Demo() {
  return (
    <Group gap={48}>
      {posicoes.map((position) => (
        <Indicator key={position} position={position} color="horizon" label="Novo" size={18}>
          <Box w={72} h={72} bg="var(--ds-surface-2)" bd="1px solid var(--ds-border-soft)" style={{ borderRadius: 'var(--ds-radius-sm)' }} />
        </Indicator>
      ))}
    </Group>
  );
}
