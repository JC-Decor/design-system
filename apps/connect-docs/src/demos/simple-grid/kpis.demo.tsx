import { Card, Group, Icon, SimpleGrid, Text, ThemeIcon } from '@jcdecor/connect-ui';

const kpis = [
  { label: 'Colaboradores ativos', value: '248', delta: '+6 no mês', icon: 'users', color: 'blue' },
  { label: 'Férias no mês', value: '12', delta: '4 aguardando aprovação', icon: 'palm', color: 'green' },
  { label: 'Banco de horas', value: '+36h', delta: 'saldo da equipe', icon: 'clock', color: 'yellow' },
  { label: 'Metas concluídas', value: '72%', delta: 'ciclo do 2º semestre', icon: 'target', color: 'lavender' },
  { label: 'Treinamentos', value: '18', delta: '3 vencendo esta semana', icon: 'book', color: 'coral' },
  { label: 'Aniversariantes', value: '7', delta: 'em outubro', icon: 'cake', color: 'ink' },
] as const;

export default function Demo() {
  return (
    <SimpleGrid cols={{ base: 1, xs: 2, md: 3 }} spacing="lg" verticalSpacing="lg" w="100%">
      {kpis.map((kpi) => (
        <Card key={kpi.label}>
          <Group justify="space-between" align="flex-start" wrap="nowrap">
            <Text fz="sm" c="var(--ds-text-3)">
              {kpi.label}
            </Text>
            <ThemeIcon variant="light" color={kpi.color} radius="md">
              <Icon name={kpi.icon} size={16} />
            </ThemeIcon>
          </Group>
          <Text fz={26} fw={700} mt="xs">
            {kpi.value}
          </Text>
          <Text fz="xs" c="var(--ds-text-3)">
            {kpi.delta}
          </Text>
        </Card>
      ))}
    </SimpleGrid>
  );
}
