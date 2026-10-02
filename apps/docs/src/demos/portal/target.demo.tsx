import { Box, Paper, Portal, Stack, Text } from '@jcdecor/ui';
import { useState } from 'react';

export default function Demo() {
  const [target, setTarget] = useState<HTMLDivElement | null>(null);

  return (
    <Stack gap="md" w="100%">
      <Paper withBorder p="md">
        <Text fz="sm" c="var(--ds-text-2)">
          Este bloco é declarado aqui…
        </Text>
        {target && (
          <Portal target={target}>
            <Text fw={600} c="var(--ds-primary)">
              …mas aparece no destino abaixo.
            </Text>
          </Portal>
        )}
      </Paper>
      <Box ref={setTarget} p="md" style={{ border: '1px dashed var(--ds-primary)', borderRadius: 'var(--ds-radius-sm)' }} />
    </Stack>
  );
}
