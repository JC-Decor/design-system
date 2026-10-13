import { Container, Text } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { background: 'page' };

export default function Demo() {
  return (
    <Container
      size="xl"
      w="100%"
      px={{ base: 16, sm: 22, md: 28 }}
      py="lg"
      bg="var(--ds-surface)"
      style={{ border: '1px dashed var(--ds-primary)', borderRadius: 'var(--ds-radius-lg)' }}
    >
      <Text fw={700}>Container size="xl"</Text>
      <Text fz="sm" c="var(--ds-text-2)">
        Largura máxima do grid do painel (--grid-max, 1440px), com margens laterais de 16 · 22 · 28px no mobile, tablet e desktop.
      </Text>
    </Container>
  );
}
