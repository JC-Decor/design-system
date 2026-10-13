import { Box, Text } from '@jcdecor/connect-ui';
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
      <Text fw={700}>Avaliação de desempenho aberta</Text>
      <Text fz="sm">Preencha sua autoavaliação do 2º semestre até 31/10.</Text>
    </Box>
  );
}
