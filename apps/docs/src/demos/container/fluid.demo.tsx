import { Container, Text } from '@jcdecor/ui';

export default function Demo() {
  return (
    <Container fluid w="100%" p="md" bg="var(--ds-primary-soft)" style={{ borderRadius: 'var(--ds-radius-sm)' }}>
      <Text fw={600} c="var(--ds-primary)">
        Container fluid
      </Text>
      <Text fz="sm" c="var(--ds-text-2)">
        Ocupa 100% da largura disponível, mantendo apenas o padding lateral — útil em painéis internos.
      </Text>
    </Container>
  );
}
