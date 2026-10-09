import { Disclaimer, Display, Headline, Kicker, Stack, Subheadline } from '@jcdecor/ui';

export default function Demo() {
  return (
    <Stack gap="sm">
      <Kicker>Novidade · Grama sintética</Kicker>
      <Display size="sm">Seu jardim verde o ano todo.</Display>
      <Headline size="sm">Sem rega, sem poda, sem barro.</Headline>
      <Subheadline c="var(--ds-text-2)">
        Grama sintética com toque macio e proteção UV, pronta para áreas externas, varandas e playgrounds.
      </Subheadline>
      <Disclaimer>* Garantia de 8 anos contra desbotamento. Imagens meramente ilustrativas.</Disclaimer>
    </Stack>
  );
}
