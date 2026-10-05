<script lang="ts">
export const meta = { centered: true, background: 'page', maxWidth: 360 };
</script>

<script setup lang="ts">
import { ContentCard, Button } from '@jcdecor/vue';
</script>

<template>
  <ContentCard
    image="https://picsum.photos/seed/painel/600/600"
    image-alt="Sala com painel ripado de madeira"
    :image-height="200"
    kicker="Inspiração"
    title="Painel ripado na sala de TV"
  >
    Ripas de Freijó criam profundidade e escondem a fiação da TV em uma tarde de instalação.
    <template #actions>
      <Button size="sm">Ver produtos</Button>
      <Button size="sm" variant="subtle">Salvar</Button>
    </template>
  </ContentCard>
</template>
