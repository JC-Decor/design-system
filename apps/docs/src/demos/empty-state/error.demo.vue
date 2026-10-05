<script setup lang="ts">
import { Button, EmptyState, EmptyStateActions, Paper } from '@jcdecor/vue';
import { IconRefresh, IconWifiOff } from '@tabler/icons-vue';
</script>

<template>
  <Paper with-border p="xl">
    <EmptyState
      variant="light"
      color="danger"
      title="Não foi possível carregar os pedidos"
      description="Verifique sua conexão e tente novamente. Se o problema continuar, fale com o suporte."
    >
      <template #icon><IconWifiOff /></template>
      <EmptyStateActions>
        <Button>
          <template #leftSection><IconRefresh :size="18" /></template>
          Tentar novamente
        </Button>
      </EmptyStateActions>
    </EmptyState>
  </Paper>
</template>
