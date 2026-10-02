import { Display, Headline, Subheadline, Disclaimer, Kicker, Stack } from '@jcdecor/ui';

export default function Demo() {
  return (
    <Stack gap="md">
      <Kicker>Kicker · Coleção Outono</Kicker>
      <Display size="sm">Display: casa nova, piso novo</Display>
      <Headline size="lg">Headline large</Headline>
      <Headline size="md">Headline medium</Headline>
      <Headline size="sm">Headline small</Headline>
      <Subheadline size="lg">Subheadline large — texto de apoio em destaque.</Subheadline>
      <Subheadline size="md">Subheadline regular — corpo de texto padrão das páginas.</Subheadline>
      <Subheadline size="sm">Subheadline small — textos secundários e listas.</Subheadline>
      <Disclaimer>Disclaimer — imagens meramente ilustrativas. Consulte condições.</Disclaimer>
    </Stack>
  );
}
