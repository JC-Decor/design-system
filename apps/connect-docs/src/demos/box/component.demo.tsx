import { Box } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Box
      component="a"
      href="#"
      px="md"
      py="sm"
      fz="sm"
      fw={600}
      c="var(--ds-primary)"
      td="none"
      style={{ border: '1px solid var(--ds-border-soft)', borderRadius: 'var(--ds-radius-sm)' }}
    >
      Ver todos os colaboradores →
    </Box>
  );
}
