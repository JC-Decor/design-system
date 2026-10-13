import { useState } from 'react';
import { Paper, Stack, Switch, Text } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

export default function Demo() {
  const [visivel, setVisivel] = useState(true);

  return (
    <Paper withBorder p="md" radius="md" w="100%">
      <Stack gap="xs">
        <Switch
          checked={visivel}
          onChange={(event) => setVisivel(event.currentTarget.checked)}
          label="Mostrar meu aniversário no Painel"
          description="Alterações são salvas automaticamente"
        />
        <Text fz="sm" c={visivel ? 'var(--ds-success)' : 'var(--ds-text-3)'}>
          {visivel ? 'Visível na lista de aniversariantes · 14 de março' : 'Oculto para os colegas'}
        </Text>
      </Stack>
    </Paper>
  );
}
