import { Button, EmptyState, Paper, SimpleGrid } from '@jcdecor/ui';
import { IconInbox, IconShoppingCart } from '@tabler/icons-react';

export default function Demo() {
  return (
    <SimpleGrid type="container" cols={{ base: 1, '560px': 2 }} w="100%">
      <Paper withBorder p="lg">
        <EmptyState size="sm" withIndicatorBackground>
          <EmptyState.Indicator>
            <IconShoppingCart size={22} />
          </EmptyState.Indicator>
          <EmptyState.Title>Seu carrinho está vazio</EmptyState.Title>
          <EmptyState.Description>Explore nossas coleções de pisos, papéis de parede e cortinas.</EmptyState.Description>
          <EmptyState.Actions>
            <Button size="sm">Ir para a loja</Button>
          </EmptyState.Actions>
        </EmptyState>
      </Paper>
      <Paper withBorder p="lg">
        <EmptyState size="sm" align="left" variant="light" color="evergreen">
          <EmptyState.Indicator>
            <IconInbox size={22} />
          </EmptyState.Indicator>
          <EmptyState.Title>Tudo em dia!</EmptyState.Title>
          <EmptyState.Description>Nenhuma conversa aguardando resposta no atendimento.</EmptyState.Description>
        </EmptyState>
      </Paper>
    </SimpleGrid>
  );
}
