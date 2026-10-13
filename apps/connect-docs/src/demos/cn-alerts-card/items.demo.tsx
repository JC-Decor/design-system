import { AlertItem, Stack } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { maxWidth: 480, centered: true };

export default function Demo() {
  return (
    <Stack gap={4}>
      <AlertItem a={{ tone: 'high', icon: 'user', title: 'Desligamento sem checklist', desc: 'Devolução de uniforme e crachá pendente.', onClick: () => {} }} />
      <AlertItem a={{ tone: 'info', icon: 'cake', title: '4 aniversariantes amanhã', desc: 'Envie uma mensagem para a equipe.' }} />
    </Stack>
  );
}
