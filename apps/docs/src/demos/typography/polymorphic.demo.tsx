import { Headline, Kicker, Subheadline, Stack } from '@jcdecor/ui';

export default function Demo() {
  return (
    <Stack gap="xs">
      {/* Visual de headline-small, mas semanticamente um <h2> */}
      <Kicker component="span">Guia de instalação</Kicker>
      <Headline size="sm" component="h2">
        Como instalar papel de parede
      </Headline>
      <Subheadline component="div" size="sm" c="var(--ds-text-2)">
        Prepare a parede, aplique a cola e alinhe a primeira faixa com prumo.
      </Subheadline>
    </Stack>
  );
}
