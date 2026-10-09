import { Alert, Stack } from '@jcdecor/ui';
import { IconAlertTriangle, IconCircleCheck, IconCircleX, IconInfoCircle } from '@tabler/icons-react';

export default function Demo() {
  return (
    <Stack>
      <Alert color="horizon" title="Pedido em separação" icon={<IconInfoCircle />}>
        O pedido #10482 está sendo preparado no centro de distribuição. Previsão de envio: amanhã.
      </Alert>
      <Alert color="evergreen" title="Pagamento aprovado" icon={<IconCircleCheck />}>
        Recebemos o Pix de R$ 1.249,90. Você receberá a nota fiscal por e-mail.
      </Alert>
      <Alert color="electric" title="Aguardando pagamento" icon={<IconAlertTriangle />}>
        O boleto vence em 2 dias. Após o vencimento, o pedido será cancelado automaticamente.
      </Alert>
      <Alert color="danger" title="Pedido cancelado" icon={<IconCircleX />}>
        O cartão final 4821 foi recusado. Escolha outra forma de pagamento para refazer o pedido.
      </Alert>
    </Stack>
  );
}
