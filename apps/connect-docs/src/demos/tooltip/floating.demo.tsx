import { Box, Text, Tooltip } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 360 };

export default function Demo() {
  return (
    <Tooltip.Floating label="Ter, 14/10 · 9 colaboradores em férias">
      <Box
        h={160}
        bg="var(--ds-primary-soft)"
        style={{ borderRadius: 'var(--ds-radius)', display: 'grid', placeItems: 'center', cursor: 'crosshair' }}
      >
        <Text fz="sm" c="var(--ds-text-2)">
          Passe o mouse sobre o gráfico de ausências
        </Text>
      </Box>
    </Tooltip.Floating>
  );
}
