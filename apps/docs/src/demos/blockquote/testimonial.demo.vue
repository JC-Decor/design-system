<script lang="ts">
export const meta = { maxWidth: 560 };
</script>

<script setup lang="ts">
import { Blockquote } from '@jcdecor/vue';
import { IconQuote } from '@tabler/icons-vue';
</script>

<template>
  <Blockquote cite="— Mariana Souza, cliente desde 2023 · São Paulo, SP" mt="lg">
    <template #icon><IconQuote :size="20" /></template>
    Reformei a sala inteira com o painel ripado e o piso vinílico da JC Decor. A entrega chegou antes do prazo e o atendimento me ajudou a
    calcular a quantidade certa — não sobrou nem faltou nada.
  </Blockquote>
</template>
