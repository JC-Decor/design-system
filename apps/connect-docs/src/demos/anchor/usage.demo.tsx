import { Anchor, Text } from '@jcdecor/connect-ui';

export default function Demo() {
  return (
    <Text fz="sm" c="var(--ds-text-2)" maw={560}>
      Antes de solicitar férias, confira a{' '}
      <Anchor href="#politica" fz="sm">
        política de férias e folgas
      </Anchor>{' '}
      e o seu saldo atualizado no{' '}
      <Anchor href="#banco-de-horas" fz="sm">
        banco de horas
      </Anchor>
      .
    </Text>
  );
}
