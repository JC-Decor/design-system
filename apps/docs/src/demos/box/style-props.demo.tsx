import { Box, Text } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Box
      p={{ base: 'md', sm: 'lg' }}
      maw={360}
      bg="var(--ds-primary-soft)"
      c="var(--ds-primary)"
      style={{ borderRadius: 'var(--ds-radius)' }}
    >
      <Text fw={600}>Cupom PRIMEIRA10</Text>
      <Text fz="sm">10% de desconto na primeira compra de pisos vinílicos.</Text>
    </Box>
  );
}
