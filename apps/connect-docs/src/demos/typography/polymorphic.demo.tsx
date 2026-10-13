import { Headline, Kicker, Subheadline, Stack } from '@jcdecor/connect-ui';

export default function Demo() {
  return (
    <Stack gap="xs">
      {/* Visual de headline-small (título de card), mas semanticamente um <h2> */}
      <Kicker component="span">Benefícios</Kicker>
      <Headline size="sm" component="h2">
        Como incluir dependentes no plano de saúde
      </Headline>
      <Subheadline component="div" size="sm" c="var(--ds-text-2)">
        Envie a certidão e o CPF do dependente em Documentos; a inclusão vale a partir do mês seguinte.
      </Subheadline>
    </Stack>
  );
}
