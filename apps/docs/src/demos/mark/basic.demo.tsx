import { Mark, Stack, Text } from '@jcdecor/ui';

export default function Demo() {
  return (
    <Stack gap="sm">
      <Text>
        Pedidos feitos até as 14h com <Mark>entrega expressa</Mark> saem no mesmo dia.
      </Text>
      <Text>
        Atenção: <Mark color="danger">últimas 3 unidades</Mark> em estoque · <Mark color="horizon">novidade</Mark> na coleção ·{' '}
        <Mark color="evergreen">sustentável</Mark>
      </Text>
    </Stack>
  );
}
