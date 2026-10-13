import { Checkbox, Stack } from '@jcdecor/connect-ui';

export default function Demo() {
  return (
    <Stack>
      <Checkbox label="Receber comunicados por e-mail" description="Resumo semanal, toda segunda-feira" defaultChecked />
      <Checkbox label="Li e concordo com a política de uso de imagem" error="Aceite a política para continuar" />
      <Checkbox label="Vale-transporte (indisponível em trabalho remoto)" disabled />
      <Checkbox label="Plano de saúde (obrigatório)" disabled defaultChecked />
    </Stack>
  );
}
