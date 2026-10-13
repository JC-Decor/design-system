import { InlineNotice, Stack } from '@jcdecor/connect-ui';

export default function Demo() {
  return (
    <Stack gap="sm">
      <InlineNotice title="Confirmação necessária">O gestor será avisado e poderá revisar a decisão.</InlineNotice>
      <InlineNotice tone="success" title="Tudo certo">As férias foram aprovadas e sincronizadas com a agenda.</InlineNotice>
      <InlineNotice tone="warning" title="Prazo próximo">A avaliação de experiência vence em 3 dias.</InlineNotice>
      <InlineNotice tone="danger" title="Não foi possível enviar">Verifique os campos obrigatórios e tente novamente.</InlineNotice>
      <InlineNotice tone="neutral" icon={false}>
        Sem título nem ícone: só o texto, numa caixa neutra.
      </InlineNotice>
    </Stack>
  );
}
