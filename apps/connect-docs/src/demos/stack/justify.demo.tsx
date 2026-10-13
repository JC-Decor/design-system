import { Box, Button, Stack, Text } from '@jcdecor/connect-ui';

export default function Demo() {
  return (
    <Stack
      justify="space-between"
      h={260}
      w={280}
      p="lg"
      bg="var(--ds-surface-2)"
      style={{ borderRadius: 'var(--ds-radius-lg)' }}
    >
      <Box>
        <Text fz={16} fw={700}>
          Segurança no trabalho
        </Text>
        <Text fz="sm" c="var(--ds-text-2)">
          Treinamento obrigatório · 2h · prazo até 30/10.
        </Text>
      </Box>
      <Button fullWidth>Iniciar treinamento</Button>
    </Stack>
  );
}
