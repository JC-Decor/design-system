import { Button, EmptyState } from '@jcdecor/ui';
import { IconSearch } from '@tabler/icons-react';

export default function Demo() {
  return (
    <EmptyState
      variant="light"
      icon={<IconSearch size={28} />}
      title="Nenhum produto encontrado"
      description="Não encontramos resultados para “papel de parede 3D”. Tente outro termo ou remova alguns filtros."
      w="100%"
    >
      <EmptyState.Actions>
        <Button variant="outline">Limpar filtros</Button>
        <Button>Ver todos os produtos</Button>
      </EmptyState.Actions>
    </EmptyState>
  );
}
