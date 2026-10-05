<script setup lang="ts">
import { ref } from 'vue';
import { Button, Group, Stepper, StepperCompleted, StepperStep, Text } from '@jcdecor/vue';
import { IconCircleCheck, IconCreditCard, IconShoppingCart, IconTruckDelivery } from '@tabler/icons-vue';

const active = ref(1);
const next = () => (active.value = Math.min(active.value + 1, 4));
const prev = () => (active.value = Math.max(active.value - 1, 0));
</script>

<template>
  <div>
    <Stepper v-model:active="active" :allow-next-steps-select="false">
      <StepperStep label="Carrinho" description="3 itens">
        <template #icon><IconShoppingCart :size="20" /></template>
        <Text fz="sm" c="var(--ds-text-2)">Revise os produtos e as quantidades.</Text>
      </StepperStep>
      <StepperStep label="Entrega" description="Endereço e frete">
        <template #icon><IconTruckDelivery :size="20" /></template>
        <Text fz="sm" c="var(--ds-text-2)">Informe o CEP e escolha a forma de entrega.</Text>
      </StepperStep>
      <StepperStep label="Pagamento" description="Pix, cartão ou boleto">
        <template #icon><IconCreditCard :size="20" /></template>
        <Text fz="sm" c="var(--ds-text-2)">Pague com Pix e ganhe 5% de desconto.</Text>
      </StepperStep>
      <StepperStep label="Confirmação" description="Resumo do pedido">
        <template #icon><IconCircleCheck :size="20" /></template>
        <Text fz="sm" c="var(--ds-text-2)">Confira os dados e finalize a compra.</Text>
      </StepperStep>
      <StepperCompleted>
        <Text fz="sm" c="var(--ds-text-2)">
          Pedido #10483 confirmado! Você receberá o código de rastreio por e-mail.
        </Text>
      </StepperCompleted>
    </Stepper>

    <Group justify="flex-end" mt="lg">
      <Button variant="subtle" :disabled="active === 0" @click="prev">Voltar</Button>
      <Button :disabled="active === 4" @click="next">
        {{ active === 3 ? 'Finalizar compra' : 'Continuar' }}
      </Button>
    </Group>
  </div>
</template>
