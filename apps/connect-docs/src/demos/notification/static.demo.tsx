import { Icon, Notification, Stack } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420, background: 'page' };

export default function Demo() {
  return (
    <Stack>
      <Notification title="Novo comunicado" withCloseButton={false}>
        Paula Andrade publicou “Semana da Saúde 2026”.
      </Notification>
      <Notification color="green" icon={<Icon name="check" size={18} />} title="Férias aprovadas" closeButtonProps={{ 'aria-label': 'Fechar' }}>
        03/11 a 22/11 · aprovadas por Paula Andrade.
      </Notification>
      <Notification color="coral" icon={<Icon name="x" size={18} />} title="Ajuste de ponto recusado" closeButtonProps={{ 'aria-label': 'Fechar' }}>
        Falta o comprovante da consulta de 09/10.
      </Notification>
      <Notification loading title="Gerando informe de rendimentos" withCloseButton={false}>
        Aguarde enquanto preparamos o PDF de 2025.
      </Notification>
    </Stack>
  );
}
