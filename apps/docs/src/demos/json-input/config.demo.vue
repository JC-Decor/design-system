<script lang="ts">
export const meta = { centered: true, maxWidth: 560 };
</script>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { Code, JsonInput, Stack, Text } from '@jcdecor/vue';

const inicial = JSON.stringify(
  { vitrine: { colunas: 4, mostrarPreco: true }, destaque: ['pisos', 'cortinas'], frete: { gratisAcima: 499 } },
  null,
  2,
);

const value = ref(inicial);
const colunas = computed<number | undefined>(() => {
  try {
    return JSON.parse(value.value).vitrine?.colunas;
  } catch {
    return undefined;
  }
});
</script>

<template>
  <Stack w="100%">
    <JsonInput
      v-model="value"
      label="JSON de configuração do painel"
      validation-error="JSON inválido"
      format-on-blur
      autosize
      :min-rows="6"
      :indent-spaces="2"
    />
    <Text fz="sm" c="var(--ds-text-2)">
      Colunas da vitrine: <Code>{{ colunas ?? '—' }}</Code>
    </Text>
  </Stack>
</template>
