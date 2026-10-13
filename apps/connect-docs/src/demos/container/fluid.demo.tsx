import { Container, Text } from '@jcdecor/connect-ui';

export default function Demo() {
  return (
    <Container fluid w="100%" p="md" bg="var(--ds-primary-soft)" style={{ borderRadius: 'var(--ds-radius)' }}>
      <Text fw={700} c="var(--ds-primary)">
        Container fluid
      </Text>
      <Text fz="sm" c="var(--ds-text-2)">
        Ocupa 100% da largura disponível, mantendo apenas o padding lateral — útil em tabelas largas, como a lista de colaboradores.
      </Text>
    </Container>
  );
}
