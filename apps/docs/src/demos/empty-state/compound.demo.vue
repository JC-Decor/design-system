<script setup lang="ts">
import {
  Button,
  EmptyState,
  EmptyStateActions,
  EmptyStateDescription,
  EmptyStateIndicator,
  EmptyStateTitle,
  Paper,
  SimpleGrid,
} from '@jcdecor/vue';
import { IconInbox, IconShoppingCart } from '@tabler/icons-vue';
</script>

<template>
  <SimpleGrid type="container" :cols="{ base: 1, '560px': 2 }" w="100%">
    <Paper with-border p="lg">
      <EmptyState size="sm" with-indicator-background>
        <EmptyStateIndicator>
          <IconShoppingCart :size="22" />
        </EmptyStateIndicator>
        <EmptyStateTitle>Seu carrinho está vazio</EmptyStateTitle>
        <EmptyStateDescription>Explore nossas coleções de pisos, papéis de parede e cortinas.</EmptyStateDescription>
        <EmptyStateActions>
          <Button size="sm">Ir para a loja</Button>
        </EmptyStateActions>
      </EmptyState>
    </Paper>
    <Paper with-border p="lg">
      <EmptyState size="sm" align="left" variant="light" color="evergreen">
        <EmptyStateIndicator>
          <IconInbox :size="22" />
        </EmptyStateIndicator>
        <EmptyStateTitle>Tudo em dia!</EmptyStateTitle>
        <EmptyStateDescription>Nenhuma conversa aguardando resposta no atendimento.</EmptyStateDescription>
      </EmptyState>
    </Paper>
  </SimpleGrid>
</template>
