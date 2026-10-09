<script lang="ts">
export const meta = { centered: true, maxWidth: 420 };
</script>

<script setup lang="ts">
import { ref } from 'vue';
import { Code, MaskInput, Stack, Text } from '@jcdecor/vue';

const raw = ref('');
const cidade = ref<string | null>(null);

function onChangeRaw(value: string) {
  raw.value = value;
  cidade.value = null;
}
</script>

<template>
  <Stack w="100%" gap="xs">
    <MaskInput
      label="CEP de entrega"
      mask="99999-999"
      always-show-mask
      input-mode="numeric"
      @change-raw="onChangeRaw"
      @complete="cidade = 'São Paulo · SP — frete grátis'"
    />
    <Text fz="sm" c="var(--ds-text-2)">
      Valor enviado à API: <Code>{{ raw || '—' }}</Code>
    </Text>
    <Text v-if="cidade" fz="sm" c="var(--ds-success)">{{ cidade }}</Text>
  </Stack>
</template>
