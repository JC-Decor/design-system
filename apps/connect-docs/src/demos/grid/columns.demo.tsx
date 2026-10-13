import { Card, Grid, Text } from '@jcdecor/connect-ui';

const kpis = ['Férias no mês', 'Banco de horas', 'Metas concluídas'];

export default function Demo() {
  return (
    <Grid gap="lg" w="100%">
      <Grid.Col span={{ base: 12, md: 8 }}>
        <Card h="100%">
          <Text fz={16} fw={700}>
            Perfil do colaborador
          </Text>
          <Text fz="sm" c="var(--ds-text-2)">
            span={'{{ base: 12, md: 8 }}'} — dados pessoais, cargo, equipe e gestor.
          </Text>
        </Card>
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 4 }}>
        <Card h="100%" bg="var(--ds-surface-2)">
          <Text fz={16} fw={700}>
            Pendências
          </Text>
          <Text fz="sm" c="var(--ds-text-2)">
            span={'{{ base: 12, md: 4 }}'} — documentos, treinamentos e 1:1.
          </Text>
        </Card>
      </Grid.Col>
      {kpis.map((kpi) => (
        <Grid.Col key={kpi} span={{ base: 12, sm: 4 }}>
          <Card padding="md">
            <Text fz="sm" fw={600}>
              {kpi}
            </Text>
            <Text fz="xs" c="var(--ds-text-3)">
              span={'{{ base: 12, sm: 4 }}'}
            </Text>
          </Card>
        </Grid.Col>
      ))}
    </Grid>
  );
}
