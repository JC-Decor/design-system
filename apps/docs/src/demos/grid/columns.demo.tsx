import { Grid, Paper, Text } from '@jcdecor/ui';

export default function Demo() {
  return (
    <Grid gap="lg" w="100%">
      <Grid.Col span={{ base: 12, md: 8 }}>
        <Paper withBorder p="lg" h="100%">
          <Text fw={600}>Conteúdo principal</Text>
          <Text fz="sm" c="var(--ds-text-2)">
            span={'{{ base: 12, md: 8 }}'} — detalhes do pedido, itens e endereço de entrega.
          </Text>
        </Paper>
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 4 }}>
        <Paper withBorder p="lg" h="100%" bg="var(--ds-surface-2)">
          <Text fw={600}>Resumo</Text>
          <Text fz="sm" c="var(--ds-text-2)">
            span={'{{ base: 12, md: 4 }}'} — subtotal, frete e cupom.
          </Text>
        </Paper>
      </Grid.Col>
      {[1, 2, 3].map((n) => (
        <Grid.Col key={n} span={{ base: 12, sm: 4 }}>
          <Paper withBorder p="md">
            <Text fz="sm" c="var(--ds-text-2)">
              span={'{{ base: 12, sm: 4 }}'}
            </Text>
          </Paper>
        </Grid.Col>
      ))}
    </Grid>
  );
}
