<script setup lang="ts">
import { Checkbox, Stack } from '@jcdecor/vue';
</script>

<template>
  <Stack>
    <Checkbox label="Receber ofertas por e-mail" description="No máximo dois e-mails por semana" default-checked />
    <Checkbox label="Li e aceito os termos de troca e devolução" error="Aceite os termos para continuar" />
    <Checkbox label="Instalação inclusa (indisponível para seu CEP)" disabled />
    <Checkbox label="Embalagem para presente" disabled default-checked />
  </Stack>
</template>
