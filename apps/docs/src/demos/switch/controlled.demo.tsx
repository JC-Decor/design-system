import { useState } from 'react';
import { Paper, Stack, Switch, Text } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

export default function Demo() {
  const [ativo, setAtivo] = useState(true);

  return (
    <Paper withBorder p="md" radius="md" w="100%">
      <Stack gap="xs">
        <Switch
          checked={ativo}
          onChange={(event) => setAtivo(event.currentTarget.checked)}
          label="Produto visível na vitrine"
          description="Alterações são salvas automaticamente"
        />
        <Text fz="sm" c={ativo ? 'var(--ds-success)' : 'var(--ds-text-3)'}>
          {ativo ? 'Publicado · Piso vinílico Carvalho Natural' : 'Oculto da loja'}
        </Text>
      </Stack>
    </Paper>
  );
}
