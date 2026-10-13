import { Button, EmptyState, Icon, Paper, SimpleGrid } from '@jcdecor/connect-ui';

export default function Demo() {
  return (
    <SimpleGrid type="container" cols={{ base: 1, '560px': 2 }} w="100%">
      <Paper withBorder p="lg">
        <EmptyState size="sm" withIndicatorBackground>
          <EmptyState.Indicator>
            <Icon name="palm" size={22} />
          </EmptyState.Indicator>
          <EmptyState.Title>Nenhuma férias agendada</EmptyState.Title>
          <EmptyState.Description>Você tem 30 dias disponíveis no período aquisitivo atual.</EmptyState.Description>
          <EmptyState.Actions>
            <Button size="sm">Solicitar férias</Button>
          </EmptyState.Actions>
        </EmptyState>
      </Paper>
      <Paper withBorder p="lg">
        <EmptyState size="sm" align="left" variant="light" color="green">
          <EmptyState.Indicator>
            <Icon name="check" size={22} />
          </EmptyState.Indicator>
          <EmptyState.Title>Tudo em dia!</EmptyState.Title>
          <EmptyState.Description>Nenhuma aprovação da sua equipe aguardando decisão.</EmptyState.Description>
        </EmptyState>
      </Paper>
    </SimpleGrid>
  );
}
