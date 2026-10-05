<script lang="ts">
export const meta = { centered: true, maxWidth: 440 };
</script>

<script setup lang="ts">
import { ref } from 'vue';
import { Group, RadioCard, RadioGroup, RadioIndicator, Stack, Text } from '@jcdecor/vue';

const opcoes = [
  { value: 'expressa', label: 'Entrega expressa', description: 'Chega em até 2 dias úteis', price: 'R$ 39,90' },
  { value: 'padrao', label: 'Entrega padrão', description: 'Chega em 5 a 8 dias úteis', price: 'Grátis' },
  { value: 'retirada', label: 'Retirar na loja', description: 'Disponível amanhã a partir das 10h', price: 'Grátis' },
];

const value = ref('padrao');
</script>

<template>
  <RadioGroup v-model="value" label="Forma de entrega">
    <Stack gap="xs" mt="xs">
      <RadioCard v-for="opcao in opcoes" :key="opcao.value" :value="opcao.value" p="md" radius="md">
        <Group wrap="nowrap" align="flex-start">
          <RadioIndicator />
          <div :style="{ flex: 1 }">
            <Text :fw="600" fz="sm">{{ opcao.label }}</Text>
            <Text fz="xs" c="var(--ds-text-3)">{{ opcao.description }}</Text>
          </div>
          <Text fz="sm" :fw="600">{{ opcao.price }}</Text>
        </Group>
      </RadioCard>
    </Stack>
  </RadioGroup>
</template>
