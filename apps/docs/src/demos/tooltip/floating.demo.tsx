import { Box, Text, Tooltip } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 360 };

export default function Demo() {
  return (
    <Tooltip.Floating label="Clique para ampliar">
      <Box
        h={160}
        bg="var(--ds-primary-soft)"
        style={{ borderRadius: 'var(--ds-radius)', display: 'grid', placeItems: 'center', cursor: 'zoom-in' }}
      >
        <Text fz="sm" c="var(--ds-text-2)">
          Passe o mouse sobre a imagem
        </Text>
      </Box>
    </Tooltip.Floating>
  );
}
