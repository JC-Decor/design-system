import { Mark, Stack, Text } from '@jcdecor/connect-ui';

export default function Demo() {
  return (
    <Stack gap="sm">
      <Text>
        Solicitações de férias enviadas <Mark>até o dia 15</Mark> entram na folha do mesmo mês.
      </Text>
      <Text>
        Atenção: <Mark color="coral">prazo vence amanhã</Mark> · <Mark color="lavender">novo benefício</Mark> ·{' '}
        <Mark color="green">aprovado</Mark>
      </Text>
    </Stack>
  );
}
