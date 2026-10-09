<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { PinInput, Stack } from '@jcdecor/vue';
</script>

<template>
  <Stack align="center">
    <PinInput aria-label="Senha (mascarada)" mask default-value="12" type="number" />
    <PinInput aria-label="Com erro" error default-value="0000" />
    <!-- Sem a prop `success` no Mantine Vue: borda de sucesso via `styles`. -->
    <PinInput aria-label="Sucesso" default-value="2025" :styles="{ input: { borderColor: 'var(--ds-success)' } }" />
    <PinInput aria-label="Desabilitado" disabled default-value="12" />
  </Stack>
</template>
