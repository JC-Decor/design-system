import { useState } from 'react';
import { Badge, Button, Group, PromptDialog } from '@jcdecor/connect-ui';

export default function Demo() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();
  const [rejected, setRejected] = useState(false);

  async function reject(reason: string) {
    if (reason.length < 10) {
      setError('Descreva o motivo com pelo menos 10 caracteres.');
      return;
    }
    setError(undefined);
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setLoading(false);
    setOpen(false);
    setRejected(true);
  }

  return (
    <Group justify="center">
      {rejected ? (
        <Badge color="coral">Solicitação recusada</Badge>
      ) : (
        <Button variant="danger" onClick={() => setOpen(true)}>
          Recusar solicitação de vaga
        </Button>
      )}
      <PromptDialog
        open={open}
        onOpenChange={(next) => {
          setOpen(next);
          if (!next) setError(undefined);
        }}
        title="Recusar solicitação"
        description="Vaga: Analista de Departamento Pessoal · solicitada por Rafael Torres."
        label="Motivo da recusa"
        placeholder="Ex.: orçamento de headcount esgotado no trimestre"
        confirmLabel="Recusar"
        loading={loading}
        error={error}
        onConfirm={reject}
      />
    </Group>
  );
}
