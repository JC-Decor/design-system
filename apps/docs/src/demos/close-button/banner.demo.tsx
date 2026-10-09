import { useState } from 'react';
import { Button, CloseButton, Group, Paper, Text } from '@jcdecor/ui';
import { IconTruck } from '@tabler/icons-react';

export default function Demo() {
  const [aberto, setAberto] = useState(true);

  if (!aberto) {
    return (
      <Button variant="subtle" size="xs" onClick={() => setAberto(true)}>
        Mostrar aviso novamente
      </Button>
    );
  }

  return (
    <Paper withBorder p="md" radius="md" bg="var(--ds-primary-soft)">
      <Group justify="space-between" wrap="nowrap" align="flex-start">
        <Group gap="sm" wrap="nowrap">
          <IconTruck size={20} color="var(--ds-primary)" />
          <Text fz="sm">Frete grátis para compras acima de R$ 299 nas regiões Sul e Sudeste.</Text>
        </Group>
        <CloseButton size="sm" aria-label="Fechar aviso" onClick={() => setAberto(false)} />
      </Group>
    </Paper>
  );
}
