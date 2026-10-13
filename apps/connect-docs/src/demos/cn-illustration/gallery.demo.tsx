import { CopyButton, Illustration, Paper, SimpleGrid, Text, Tooltip, UnstyledButton, illustrationNames } from '@jcdecor/connect-ui';

export default function Demo() {
  return (
    <SimpleGrid type="container" cols={{ base: 2, '520px': 3, '760px': 4 }} spacing="sm">
      {illustrationNames.map((name) => (
        <CopyButton key={name} value={name}>
          {({ copied, copy }) => (
            <Tooltip label={copied ? 'Copiado!' : 'Copiar nome'}>
              <UnstyledButton onClick={copy} aria-label={`Copiar ${name}`}>
                <Paper withBorder radius="md" p="sm" h="100%">
                  <Illustration src={name} size="sm" mx="auto" h={88} style={{ objectFit: 'contain' }} />
                  <Text ff="monospace" fz="xs" ta="center" mt="xs" c={copied ? 'green' : 'dimmed'}>
                    {name}
                  </Text>
                </Paper>
              </UnstyledButton>
            </Tooltip>
          )}
        </CopyButton>
      ))}
    </SimpleGrid>
  );
}
