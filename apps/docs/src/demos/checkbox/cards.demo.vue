<script lang="ts">
export const meta = { centered: true, maxWidth: 440 };
</script>

<script setup lang="ts">
import { ref } from 'vue';
import { CheckboxCard, CheckboxGroup, CheckboxIndicator, Group, Stack, Text } from '@jcdecor/vue';

const servicos = [
  { value: 'instalacao', label: 'Instalação profissional', description: 'Equipe JC Decor certificada', price: 'R$ 18/m²' },
  { value: 'medicao', label: 'Visita técnica de medição', description: 'Agendada em até 3 dias úteis', price: 'Grátis' },
  { value: 'descarte', label: 'Retirada do piso antigo', description: 'Descarte ecológico do material', price: 'R$ 9/m²' },
];

const value = ref<string[]>(['medicao']);
</script>

<template>
  <CheckboxGroup v-model="value" label="Serviços adicionais">
    <Stack gap="xs" mt="xs">
      <CheckboxCard v-for="s in servicos" :key="s.value" :value="s.value" p="md" radius="md">
        <Group wrap="nowrap" align="flex-start">
          <CheckboxIndicator />
          <div style="flex: 1">
            <Text :fw="600" fz="sm">{{ s.label }}</Text>
            <Text fz="xs" c="var(--ds-text-3)">{{ s.description }}</Text>
          </div>
          <Text fz="sm" :fw="600">{{ s.price }}</Text>
        </Group>
      </CheckboxCard>
    </Stack>
  </CheckboxGroup>
</template>
