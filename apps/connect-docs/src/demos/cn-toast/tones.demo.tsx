import { Stack, ToastCard } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { maxWidth: 380, centered: true };

export default function Demo() {
  return (
    <Stack gap={10}>
      <ToastCard tone="success" onDismiss={() => {}}>
        Feedback 1:1 com Bruno Lima registrado.
      </ToastCard>
      <ToastCard tone="error" onDismiss={() => {}}>
        Falha ao gerar o holerite de setembro.
      </ToastCard>
      <ToastCard tone="info" onDismiss={() => {}}>
        3 colaboradores fazem aniversário nesta semana.
      </ToastCard>
      <ToastCard tone="info">Sem botão de fechar (sem onDismiss).</ToastCard>
    </Stack>
  );
}
