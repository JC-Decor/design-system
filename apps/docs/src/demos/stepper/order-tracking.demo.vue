<script lang="ts">
export const meta = { centered: true, maxWidth: 420 };
</script>

<script setup lang="ts">
import { Stepper, StepperStep } from '@jcdecor/vue';
</script>

<template>
  <Stepper :active="3" orientation="vertical" size="sm">
    <StepperStep label="Pedido recebido" description="02/10 às 09:14" />
    <StepperStep label="Pagamento aprovado" description="Pix · 02/10 às 09:15" />
    <StepperStep label="Em separação" description="Centro de distribuição — Campinas/SP" />
    <StepperStep label="Em transporte" description="Previsão de entrega: 07/10" loading />
    <StepperStep label="Entregue" />
  </Stepper>
</template>
