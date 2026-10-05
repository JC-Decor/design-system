<script setup lang="ts">
import { Stack, Switch } from '@jcdecor/vue';
</script>

<template>
  <Stack>
    <Switch default-checked label="Notificar quando o pedido for enviado" />
    <Switch label="Receber novidades no WhatsApp" description="No máximo uma mensagem por semana" />
    <Switch default-checked color="evergreen" label="Produto ativo na vitrine" />
    <Switch disabled label="Sincronizar estoque com o ERP" />
  </Stack>
</template>
