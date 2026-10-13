import { useState } from 'react';
import { Button, ConfirmDialog, Group, Text, type ConfirmTone } from '@jcdecor/connect-ui';

const examples: Record<ConfirmTone, { title: string; description: string; confirmLabel: string }> = {
  primary: {
    title: 'Publicar comunicado?',
    description: 'O comunicado "Novo plano de benefícios" será enviado para 248 colaboradores.',
    confirmLabel: 'Publicar',
  },
  danger: {
    title: 'Excluir documento?',
    description: 'O contrato de experiência de Bruno Lima será removido. Esta ação não pode ser desfeita.',
    confirmLabel: 'Excluir',
  },
  warning: {
    title: 'Reabrir ciclo de metas?',
    description: 'Os gestores poderão editar as metas do 2º semestre novamente até sexta-feira.',
    confirmLabel: 'Reabrir ciclo',
  },
};

export default function Demo() {
  const [tone, setTone] = useState<ConfirmTone | null>(null);
  const [result, setResult] = useState('');
  const current = tone ? examples[tone] : examples.primary;

  return (
    <Group justify="center">
      <Button onClick={() => setTone('primary')}>Primário</Button>
      <Button variant="danger" onClick={() => setTone('danger')}>
        Perigo
      </Button>
      <Button variant="outline" color="yellow" onClick={() => setTone('warning')}>
        Atenção
      </Button>

      <ConfirmDialog
        open={tone !== null}
        onOpenChange={(open) => !open && setTone(null)}
        tone={tone ?? 'primary'}
        title={current.title}
        description={current.description}
        confirmLabel={current.confirmLabel}
        onConfirm={() => {
          setResult(`${current.confirmLabel}: confirmado`);
          setTone(null);
        }}
      />
      {result && (
        <Text w="100%" ta="center" fz="sm" c="var(--ds-text-3)">
          {result}
        </Text>
      )}
    </Group>
  );
}
