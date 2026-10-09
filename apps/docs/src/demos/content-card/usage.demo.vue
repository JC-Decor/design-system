<script lang="ts">
export const meta = { centered: true, background: 'page', maxWidth: 360 };
</script>

<script setup lang="ts">
import { ContentCard, Button } from '@jcdecor/vue';
</script>

<template>
  <ContentCard kicker="Exemplo" title="Card de conteúdo">
    Superfície branca sobre o fundo LightGray, borda suave e sombra pequena.
    <template #actions>
      <Button size="sm">Abrir</Button>
    </template>
  </ContentCard>
</template>
