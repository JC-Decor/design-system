import { Anchor, Text } from '@jcdecor/ui';

export default function Demo() {
  return (
    <Text fz="sm" c="var(--ds-text-2)" maw={560}>
      Antes de instalar o piso vinílico, confira o{' '}
      <Anchor href="#guia" fz="sm">
        guia de preparação do contrapiso
      </Anchor>{' '}
      e calcule a quantidade de caixas com a nossa{' '}
      <Anchor href="#calculadora" fz="sm">
        calculadora de m²
      </Anchor>
      .
    </Text>
  );
}
