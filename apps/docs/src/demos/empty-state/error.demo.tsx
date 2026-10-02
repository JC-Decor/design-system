import { Button, EmptyState, Paper } from '@jcdecor/ui';
import { IconRefresh, IconWifiOff } from '@tabler/icons-react';

export default function Demo() {
  return (
    <Paper withBorder p="xl">
      <EmptyState
        variant="light"
        color="danger"
        icon={<IconWifiOff />}
        title="Não foi possível carregar os pedidos"
        description="Verifique sua conexão e tente novamente. Se o problema continuar, fale com o suporte."
      >
        <EmptyState.Actions>
          <Button leftSection={<IconRefresh size={18} />}>Tentar novamente</Button>
        </EmptyState.Actions>
      </EmptyState>
    </Paper>
  );
}
