<script lang="ts">
export const meta = { centered: true, maxWidth: 420, background: 'page' };
</script>

<script setup lang="ts">
import { Notification, Stack, type CloseButtonProps } from '@jcdecor/vue';
import { IconCheck, IconX } from '@tabler/icons-vue';

// Atributos HTML (aria-label) também vão para o botão de fechar
const closeButtonProps: CloseButtonProps & { 'aria-label': string } = { 'aria-label': 'Fechar' };
</script>

<template>
  <Stack>
    <Notification title="Nova mensagem" :with-close-button="false">
      Carla Mendes perguntou sobre a instalação do painel ripado.
    </Notification>
    <Notification color="evergreen" title="Adicionado ao carrinho" :close-button-props="closeButtonProps">
      <template #icon><IconCheck :size="18" /></template>
      Cortina Linho Cru 2,80 m × 2
    </Notification>
    <Notification color="danger" title="Cupom inválido" :close-button-props="closeButtonProps">
      <template #icon><IconX :size="18" /></template>
      O cupom JCMAIO expirou em 31/05.
    </Notification>
    <Notification loading title="Enviando nota fiscal" :with-close-button="false">
      Aguarde enquanto geramos o PDF do pedido #10483.
    </Notification>
  </Stack>
</template>
