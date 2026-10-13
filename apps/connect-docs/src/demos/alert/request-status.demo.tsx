import { Alert, Icon, Stack } from '@jcdecor/connect-ui';

export default function Demo() {
  return (
    <Stack>
      <Alert color="blue" title="Solicitação em análise" icon={<Icon name="clock" />}>
        Sua solicitação de reembolso de curso está com o time de Benefícios. Resposta em até 3 dias úteis.
      </Alert>
      <Alert color="green" title="Férias aprovadas" icon={<Icon name="check" />}>
        Paula Andrade aprovou suas férias de 03/11 a 22/11. O aviso já está em Documentos.
      </Alert>
      <Alert color="yellow" title="Documento pendente" icon={<Icon name="doc-clock" />}>
        Envie o comprovante de escolaridade até 30/10 para manter o auxílio educação.
      </Alert>
      <Alert color="coral" title="Marcação de ponto ausente" icon={<Icon name="x" />}>
        Não encontramos a saída de 09/10. Solicite o ajuste ao seu gestor para não gerar desconto.
      </Alert>
    </Stack>
  );
}
