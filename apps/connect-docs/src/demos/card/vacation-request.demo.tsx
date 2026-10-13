import { Badge, Button, Card, Divider, Group, Stack, Text } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 360 };

const detalhes = [
  { rotulo: 'Período', valor: '03/11 a 22/11/2026' },
  { rotulo: 'Dias corridos', valor: '20 dias' },
  { rotulo: 'Abono pecuniário', valor: '10 dias' },
  { rotulo: 'Aprovado por', valor: 'Paula Andrade' },
];

export default function Demo() {
  return (
    <Card>
      <Card.Section withBorder inheritPadding py="sm">
        <Group justify="space-between">
          <Text fw={700}>Solicitação de férias</Text>
          <Badge color="green">Aprovada</Badge>
        </Group>
      </Card.Section>
      <Stack gap="xs" mt="md">
        {detalhes.map((item) => (
          <Group key={item.rotulo} justify="space-between" wrap="nowrap">
            <Text fz="sm" c="var(--ds-text-3)">
              {item.rotulo}
            </Text>
            <Text fz="sm" fw={500}>
              {item.valor}
            </Text>
          </Group>
        ))}
      </Stack>
      <Divider my="md" />
      <Group justify="space-between">
        <Text fw={600}>Saldo restante</Text>
        <Text fw={700} fz="lg">
          0 dias
        </Text>
      </Group>
      <Button fullWidth mt="md" variant="ghost">
        Baixar aviso de férias
      </Button>
    </Card>
  );
}
