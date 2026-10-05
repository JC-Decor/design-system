<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { PinInput, Stack, Text } from '@jcdecor/vue';

const cupom = ref('');
const valido = computed(() => cupom.value === 'DECO10');
</script>

<template>
  <Stack align="center" gap="xs">
    <Text id="cupom-label" fz="sm" :fw="500" c="var(--ds-text-2)">Cupom de desconto</Text>
    <!-- O PinInput do Mantine Vue ainda não tem a prop `success`: a borda verde vem de `styles`. -->
    <PinInput
      :model-value="cupom"
      :length="6"
      type="alphanumeric"
      aria-label="Cupom de desconto"
      :error="cupom.length === 6 && !valido"
      :styles="valido ? { input: { borderColor: 'var(--ds-success)' } } : undefined"
      @update:model-value="(value) => (cupom = value.toUpperCase())"
    />
    <Text fz="sm" :c="valido ? 'var(--ds-success)' : cupom.length === 6 ? 'var(--ds-error)' : 'var(--ds-text-3)'">
      {{ valido ? 'Cupom aplicado: 10% de desconto' : cupom.length === 6 ? 'Cupom inválido ou expirado' : 'Experimente DECO10' }}
    </Text>
  </Stack>
</template>
