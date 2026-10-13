import { useState } from 'react';
import { Badge, Button, ConfirmDialog, Group } from '@jcdecor/connect-ui';

export default function Demo() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [approved, setApproved] = useState(false);

  async function approve() {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500)); // chamada à API
    setLoading(false);
    setOpen(false);
    setApproved(true);
  }

  return (
    <Group justify="center">
      {approved ? (
        <Badge color="green">Férias aprovadas</Badge>
      ) : (
        <Button onClick={() => setOpen(true)}>Aprovar férias</Button>
      )}
      <ConfirmDialog
        open={open}
        onOpenChange={setOpen}
        title="Aprovar férias de Carla Dias?"
        description="15 dias, de 06/01 a 20/01. A colaboradora e o gestor serão notificados."
        confirmLabel="Aprovar"
        loading={loading}
        onConfirm={approve}
      />
    </Group>
  );
}
