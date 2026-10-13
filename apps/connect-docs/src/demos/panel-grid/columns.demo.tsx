import { Card, Grid, Text } from '@jcdecor/connect-ui';

export default function Demo() {
  return (
    <Grid gap="lg" w="100%">
      <Grid.Col span={{ base: 12, md: 8 }}>
        <Card h="100%">
          <Text fw={700}>Solicitações da equipe</Text>
          <Text fz="sm" c="var(--ds-text-2)">
            span={'{{ base: 12, md: 8 }}'} — férias, ajustes de ponto e reembolsos aguardando aprovação.
          </Text>
        </Card>
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 4 }}>
        <Card h="100%" bg="var(--ds-surface-tint)">
          <Text fw={700}>Aniversariantes</Text>
          <Text fz="sm" c="var(--ds-text-2)">
            span={'{{ base: 12, md: 4 }}'} — coluna lateral.
          </Text>
        </Card>
      </Grid.Col>
      {['Banco de horas', 'Metas do trimestre', 'Treinamentos'].map((titulo) => (
        <Grid.Col key={titulo} span={{ base: 12, sm: 4 }}>
          <Card padding="md">
            <Text fz="sm" fw={600}>{titulo}</Text>
            <Text fz="xs" c="var(--ds-text-3)">span={'{{ base: 12, sm: 4 }}'}</Text>
          </Card>
        </Grid.Col>
      ))}
    </Grid>
  );
}
