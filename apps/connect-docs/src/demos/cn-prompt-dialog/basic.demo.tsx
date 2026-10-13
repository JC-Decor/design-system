import { useState } from 'react';
import { Button, Group, PromptDialog, Text } from '@jcdecor/connect-ui';

export default function Demo() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('Admissões 2025');

  return (
    <Group justify="center" gap="md">
      <Text fz="sm" c="var(--ds-text-2)">
        Pasta: <b>{name}</b>
      </Text>
      <Button variant="ghost" onClick={() => setOpen(true)}>
        Renomear pasta
      </Button>
      <PromptDialog
        open={open}
        onOpenChange={setOpen}
        title="Renomear pasta"
        description="O novo nome aparece para todos que têm acesso aos documentos."
        label="Nome da pasta"
        defaultValue={name}
        confirmLabel="Salvar"
        onConfirm={(value) => {
          setName(value);
          setOpen(false);
        }}
      />
    </Group>
  );
}
