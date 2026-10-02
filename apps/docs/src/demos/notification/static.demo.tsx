import { Notification, Stack } from '@jcdecor/ui';
import { IconCheck, IconX } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420, background: 'page' };

export default function Demo() {
  return (
    <Stack>
      <Notification title="Nova mensagem" withCloseButton={false}>
        Carla Mendes perguntou sobre a instalação do painel ripado.
      </Notification>
      <Notification color="evergreen" icon={<IconCheck size={18} />} title="Adicionado ao carrinho" closeButtonProps={{ 'aria-label': 'Fechar' }}>
        Cortina Linho Cru 2,80 m × 2
      </Notification>
      <Notification color="danger" icon={<IconX size={18} />} title="Cupom inválido" closeButtonProps={{ 'aria-label': 'Fechar' }}>
        O cupom JCMAIO expirou em 31/05.
      </Notification>
      <Notification loading title="Enviando nota fiscal" withCloseButton={false}>
        Aguarde enquanto geramos o PDF do pedido #10483.
      </Notification>
    </Stack>
  );
}
