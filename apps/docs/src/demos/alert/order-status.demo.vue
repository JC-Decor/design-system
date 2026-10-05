<script setup lang="ts">
import { Alert, Stack } from '@jcdecor/vue';
import { IconAlertTriangle, IconCircleCheck, IconCircleX, IconInfoCircle } from '@tabler/icons-vue';
</script>

<template>
  <Stack>
    <Alert color="horizon" title="Pedido em separação">
      <template #icon><IconInfoCircle /></template>
      O pedido #10482 está sendo preparado no centro de distribuição. Previsão de envio: amanhã.
    </Alert>
    <Alert color="evergreen" title="Pagamento aprovado">
      <template #icon><IconCircleCheck /></template>
      Recebemos o Pix de R$ 1.249,90. Você receberá a nota fiscal por e-mail.
    </Alert>
    <Alert color="electric" title="Aguardando pagamento">
      <template #icon><IconAlertTriangle /></template>
      O boleto vence em 2 dias. Após o vencimento, o pedido será cancelado automaticamente.
    </Alert>
    <Alert color="danger" title="Pedido cancelado">
      <template #icon><IconCircleX /></template>
      O cartão final 4821 foi recusado. Escolha outra forma de pagamento para refazer o pedido.
    </Alert>
  </Stack>
</template>
