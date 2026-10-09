<script lang="ts">
export const meta = { centered: true, maxWidth: 520 };
</script>

<script setup lang="ts">
import { JsonInput } from '@jcdecor/vue';
</script>

<template>
  <JsonInput
    label="Configuração do banner"
    description="Formatado automaticamente ao sair do campo"
    placeholder='{ "titulo": "Semana do Piso" }'
    validation-error="JSON inválido — confira vírgulas e aspas"
    format-on-blur
    autosize
    :min-rows="4"
  />
</template>
