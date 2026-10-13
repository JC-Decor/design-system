import { Display, Headline, Subheadline, Disclaimer, Kicker, Stack } from '@jcdecor/connect-ui';

export default function Demo() {
  return (
    <Stack gap="md">
      <Kicker>Kicker · eyebrow em DM Mono</Kicker>
      <Display size="sm">Display: Painel do Colaborador</Display>
      <Headline size="lg">Headline large — título de seção</Headline>
      <Headline size="md">Headline medium — título de diálogo</Headline>
      <Headline size="sm">Headline small — título de card</Headline>
      <Subheadline size="lg">Subheadline large — texto de apoio em destaque.</Subheadline>
      <Subheadline size="md">Subheadline regular — corpo de texto padrão do painel.</Subheadline>
      <Subheadline size="sm">Subheadline small — rótulos, tabelas e listas.</Subheadline>
      <Disclaimer>Disclaimer — atualizado há 5 min · visível só para gestores.</Disclaimer>
    </Stack>
  );
}
