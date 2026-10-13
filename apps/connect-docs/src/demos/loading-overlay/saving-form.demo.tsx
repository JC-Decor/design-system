import { useState } from 'react';
import { Box, Button, Group, LoadingOverlay, Select, Stack, TextInput, Textarea } from '@jcdecor/connect-ui';
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
        <TextInput label="Título do comunicado" defaultValue="Novo horário do refeitório" />
        <Group grow>
          <Select label="Público" data={['Todos', 'Logística', 'Comercial', 'Gestores']} defaultValue="Todos" allowDeselect={false} />
          <TextInput label="Publicar em" defaultValue="14/10/2026" />
        </Group>
        <Textarea label="Mensagem" defaultValue="A partir de segunda, o almoço será servido das 11h30 às 14h, em dois turnos por equipe." autosize minRows={2} />
        <Group justify="flex-end">
          <Button variant="subtle" disabled={saving}>
            Descartar
          </Button>
          <Button onClick={save} loading={saving}>
            Salvar rascunho
          </Button>
        </Group>
      </Stack>
    </Box>
  );
}
