import { Button, EmptyState } from '@jcdecor/ui';
import { IconMapOff } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <EmptyState
      py={80}
      icon={<IconMapOff size={28} />}
      title="Página não encontrada"
      description="O endereço acessado não existe neste Design System."
    >
      <EmptyState.Actions>
        <Button component={Link} to="/">Voltar ao início</Button>
      </EmptyState.Actions>
    </EmptyState>
  );
}
