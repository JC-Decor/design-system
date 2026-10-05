<script lang="ts">
export const meta = { centered: true, maxWidth: 420, background: 'page' };
</script>

<script setup lang="ts">
import { Notification, Stack } from '@jcdecor/vue';
import { IconCheck, IconX } from '@tabler/icons-vue';
</script>

<template>
  <Stack>
    <Notification title="Nova mensagem" :with-close-button="false">
      Carla Mendes perguntou sobre a instalação do painel ripado.
    </Notification>
    <Notification color="evergreen" title="Adicionado ao carrinho" :close-button-props="{ 'aria-label': 'Fechar' }">
      <template #icon><IconCheck :size="18" /></template>
      Cortina Linho Cru 2,80 m × 2
    </Notification>
    <Notification color="danger" title="Cupom inválido" :close-button-props="{ 'aria-label': 'Fechar' }">
      <template #icon><IconX :size="18" /></template>
      O cupom JCMAIO expirou em 31/05.
    </Notification>
    <Notification loading title="Enviando nota fiscal" :with-close-button="false">
      Aguarde enquanto geramos o PDF do pedido #10483.
    </Notification>
  </Stack>
</template>
