<script setup lang="ts">
import { PageHeader, Button } from '@jcdecor/vue';
</script>

<template>
  <PageHeader
    :mb="0"
    size="display"
    kicker="JC Decor · DS"
    title="Design System"
    description="Tokens, componentes e padrões para construir as lojas e os painéis da JC Decor."
  >
    <template #actions>
      <Button variant="accent">Começar</Button>
    </template>
  </PageHeader>
</template>
