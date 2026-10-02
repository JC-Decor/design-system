import { Stack, Switch } from '@jcdecor/ui';

export default function Demo() {
  return (
    <Stack>
      <Switch defaultChecked label="Notificar quando o pedido for enviado" />
      <Switch label="Receber novidades no WhatsApp" description="No máximo uma mensagem por semana" />
      <Switch defaultChecked color="evergreen" label="Produto ativo na vitrine" />
      <Switch disabled label="Sincronizar estoque com o ERP" />
    </Stack>
  );
}
