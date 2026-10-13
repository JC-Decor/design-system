import { Button, EmptyState, Icon } from '@jcdecor/connect-ui';

export default function Demo() {
  return (
    <EmptyState
      variant="light"
      icon={<Icon name="search" size={26} />}
      title="Nenhum colaborador encontrado"
      description="Não encontramos ninguém com “Fernanda” na área Logística. Tente outro nome ou remova alguns filtros."
      w="100%"
    >
      <EmptyState.Actions>
        <Button variant="outline">Limpar filtros</Button>
        <Button>Ver todos os colaboradores</Button>
      </EmptyState.Actions>
    </EmptyState>
  );
}
