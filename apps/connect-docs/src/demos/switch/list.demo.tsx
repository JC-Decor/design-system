import { Stack, Switch } from '@jcdecor/connect-ui';

export default function Demo() {
  return (
    <Stack>
      <Switch defaultChecked label="Notificar novos comunicados" />
      <Switch label="Lembrete de registro de ponto" description="Às 8h e às 18h, nos dias úteis" />
      <Switch defaultChecked color="green" label="Comunicado publicado" />
      <Switch disabled label="Sincronizar com a folha de pagamento" />
    </Stack>
  );
}
