import { Button, EmptyState, Icon, Paper } from '@jcdecor/connect-ui';

export default function Demo() {
  return (
    <Paper withBorder p="xl">
      <EmptyState
        variant="light"
        color="coral"
        icon={<Icon name="globe" />}
        title="Não foi possível carregar o espelho de ponto"
        description="Verifique sua conexão e tente novamente. Se o problema continuar, abra um chamado para o RH."
      >
        <EmptyState.Actions>
          <Button>Tentar novamente</Button>
        </EmptyState.Actions>
      </EmptyState>
    </Paper>
  );
}
