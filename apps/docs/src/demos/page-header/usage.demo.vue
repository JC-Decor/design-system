<script setup lang="ts">
import { PageHeader, Button } from '@jcdecor/vue';
import { IconDownload, IconPlus } from '@tabler/icons-vue';
</script>

<template>
  <PageHeader
    :mb="0"
    kicker="Painéis"
    title="Vendas por categoria"
    description="Receita, pedidos e ticket médio dos últimos 30 dias."
  >
    <template #actions>
      <Button variant="outline">
        <template #leftSection><IconDownload :size="18" /></template>
        Exportar
      </Button>
      <Button>
        <template #leftSection><IconPlus :size="18" /></template>
        Nova meta
      </Button>
    </template>
  </PageHeader>
</template>
