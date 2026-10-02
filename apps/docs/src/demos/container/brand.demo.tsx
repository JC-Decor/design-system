import { Container, Text } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { background: 'page' };

export default function Demo() {
  return (
    <Container size={1224} w="100%" p="lg" bg="var(--ds-surface)" style={{ border: '1px dashed var(--ds-primary)', borderRadius: 'var(--ds-radius)' }}>
      <Text fw={600}>Container size={'{1224}'}</Text>
      <Text fz="sm" c="var(--ds-text-2)">
        Largura máxima do grid da marca (--grid-max). Use para o conteúdo das páginas da loja.
      </Text>
    </Container>
  );
}
