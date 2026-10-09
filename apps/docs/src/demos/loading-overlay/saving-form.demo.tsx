import { useState } from 'react';
import { Box, Button, Group, LoadingOverlay, NumberInput, Stack, TextInput, Textarea } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { maxWidth: 480, centered: true };

export default function Demo() {
  const [saving, setSaving] = useState(false);

  const save = () => {
    setSaving(true);
    window.setTimeout(() => setSaving(false), 2000);
  };

  return (
    <Box pos="relative">
      <LoadingOverlay visible={saving} zIndex={10} overlayProps={{ radius: 'md' }} />
      <Stack>
        <TextInput label="Nome do produto" defaultValue="Cortina blackout Grafite" />
        <Group grow>
          <NumberInput label="Preço" defaultValue={329} prefix="R$ " decimalSeparator="," thousandSeparator="." decimalScale={2} fixedDecimalScale />
          <NumberInput label="Estoque" defaultValue={48} min={0} />
        </Group>
        <Textarea label="Descrição" defaultValue="Bloqueia 100% da luz. Tecido com toque de linho, ilhós cromados." autosize minRows={2} />
        <Group justify="flex-end">
          <Button variant="subtle" disabled={saving}>
            Descartar
          </Button>
          <Button onClick={save} loading={saving}>
            Salvar alterações
          </Button>
        </Group>
      </Stack>
    </Box>
  );
}
