import { Checkbox, Stack } from '@jcdecor/ui';

export default function Demo() {
  return (
    <Stack>
      <Checkbox label="Receber ofertas por e-mail" description="No máximo dois e-mails por semana" defaultChecked />
      <Checkbox label="Li e aceito os termos de troca e devolução" error="Aceite os termos para continuar" />
      <Checkbox label="Instalação inclusa (indisponível para seu CEP)" disabled />
      <Checkbox label="Embalagem para presente" disabled defaultChecked />
    </Stack>
  );
}
