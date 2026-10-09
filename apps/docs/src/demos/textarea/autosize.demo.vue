<script lang="ts">
export const meta = { centered: true, maxWidth: 480 };
</script>

<script setup lang="ts">
import { Textarea } from '@jcdecor/vue';
</script>

<template>
  <Textarea
    label="Observações do pedido"
    description="O campo cresce conforme você digita (até 6 linhas)"
    placeholder="Ex.: entregar no período da manhã, interfone 42"
    autosize
    :min-rows="2"
    :max-rows="6"
  />
</template>
