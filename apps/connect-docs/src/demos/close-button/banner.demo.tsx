import { useState } from 'react';
import { Button, CloseButton, Group, Icon, Paper, Text } from '@jcdecor/connect-ui';

export default function Demo() {
  const [aberto, setAberto] = useState(true);

  if (!aberto) {
    return (
      <Button variant="subtle" size="xs" onClick={() => setAberto(true)}>
        Mostrar comunicado novamente
      </Button>
    );
  }

  return (
    <Paper withBorder p="md" radius="md" bg="var(--ds-primary-soft)">
      <Group justify="space-between" wrap="nowrap" align="flex-start">
        <Group gap="sm" wrap="nowrap">
          <Icon name="megaphone" size={18} c="var(--ds-primary)" />
          <Text fz="sm">O prazo para marcar as férias de dezembro termina na sexta-feira, dia 31.</Text>
        </Group>
        <CloseButton size="sm" aria-label="Fechar comunicado" onClick={() => setAberto(false)} />
      </Group>
    </Paper>
  );
}
