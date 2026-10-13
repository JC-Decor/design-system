import { Center, Text } from '@jcdecor/connect-ui';

export default function Demo() {
  return (
    <Center
      h={160}
      w="100%"
      bg="var(--ds-primary-soft)"
      c="var(--ds-primary)"
      style={{ borderRadius: 'var(--ds-radius)' }}
    >
      <Text fw={600}>Conteúdo centralizado nos dois eixos</Text>
    </Center>
  );
}
