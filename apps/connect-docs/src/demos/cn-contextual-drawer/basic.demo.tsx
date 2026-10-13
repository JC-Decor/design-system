import { useState } from 'react';
import { AppSelect, Button, ContextualDrawer, Group, Stack, Textarea, TextInput } from '@jcdecor/connect-ui';

export default function Demo() {
  const [open, setOpen] = useState(false);
  const [tipo, setTipo] = useState('ferias');

  return (
    <Group justify="center">
      <Button onClick={() => setOpen(true)}>Nova solicitação</Button>
      <ContextualDrawer
        open={open}
        onOpenChange={setOpen}
        title="Nova solicitação de ausência"
        description="Preencha o período e o motivo. O gestor recebe a solicitação para aprovar."
        footer={
          <>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancelar
            </Button>
            <Button onClick={() => setOpen(false)}>Enviar para aprovação</Button>
          </>
        }
      >
        <Stack gap="md" maw={560}>
          <AppSelect
            label="Tipo"
            required
            value={tipo}
            onChange={setTipo}
            options={[
              { value: 'ferias', label: 'Férias', icon: 'palm' },
              { value: 'folga', label: 'Folga do banco de horas', icon: 'clock' },
              { value: 'atestado', label: 'Atestado médico', icon: 'doc' },
            ]}
          />
          <Group grow>
            <TextInput label="Início" placeholder="dd/mm/aaaa" />
            <TextInput label="Fim" placeholder="dd/mm/aaaa" />
          </Group>
          <Textarea label="Observações" placeholder="Algo que o gestor precise saber?" minRows={3} autosize />
        </Stack>
      </ContextualDrawer>
    </Group>
  );
}
