<script lang="ts">
export const meta = { centered: true, maxWidth: 380 };
</script>

<script setup lang="ts">
import { CouponCode } from '@jcdecor/vue';
import { Notifications, notifications } from '@mantine-vue/notifications';

function onCopy(code: string) {
  notifications.show({ color: 'evergreen', title: 'Cupom copiado', message: `Cole ${code} no carrinho para aplicar o desconto.` });
}
</script>

<template>
  <CouponCode
    code="PISO10"
    description="10% OFF em pisos vinílicos"
    copy-label="Copiar cupom"
    copied-label="Copiado"
    @copy="onCopy"
  />
  <!-- Normalmente fica uma vez na raiz do app, dentro do JcProvider -->
  <Notifications position="top-right" />
</template>
