<script setup lang="ts">
import { Radio, RadioGroup, Stack } from '@jcdecor/vue';
</script>

<template>
  <RadioGroup label="Forma de pagamento" description="Pix tem 5% de desconto" default-value="pix" with-asterisk>
    <Stack mt="xs" gap="sm">
      <Radio value="pix" label="Pix" description="Aprovação imediata" />
      <Radio value="cartao" label="Cartão de crédito" description="Em até 10x sem juros" />
      <Radio value="boleto" label="Boleto bancário" description="Indisponível para pedidos sob medida" disabled />
    </Stack>
  </RadioGroup>
</template>
