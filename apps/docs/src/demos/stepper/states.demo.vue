<script setup lang="ts">
import { Stack, Stepper, StepperStep } from '@jcdecor/vue';
import { IconAlertTriangle } from '@tabler/icons-vue';
</script>

<template>
  <Stack gap="xl">
    <Stepper :active="1" size="sm" label-position="bottom">
      <StepperStep label="Dados" />
      <StepperStep label="Endereço" />
      <StepperStep label="Revisão" />
    </Stepper>
    <Stepper :active="2" size="sm" color="evergreen" label-position="bottom">
      <StepperStep label="Foto do produto" />
      <StepperStep label="Preço e estoque" />
      <StepperStep label="Publicação" />
    </Stepper>
    <Stepper :active="1" size="sm" label-position="bottom">
      <StepperStep label="Pedido" />
      <StepperStep label="Pagamento" description="Cartão recusado" color="danger">
        <template #icon><IconAlertTriangle :size="18" /></template>
      </StepperStep>
      <StepperStep label="Envio" />
    </Stepper>
  </Stack>
</template>
