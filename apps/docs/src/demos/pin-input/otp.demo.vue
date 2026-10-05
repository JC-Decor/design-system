<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { ref } from 'vue';
import { Anchor, PinInput, Stack, Text } from '@jcdecor/vue';

const codigo = ref<string | null>(null);
</script>

<template>
  <Stack align="center" gap="xs">
    <Text fz="sm" c="var(--ds-text-2)">Enviamos um código por SMS para (11) •••••-4321</Text>
    <PinInput type="number" one-time-code :length="4" size="lg" aria-label="Código de verificação" @complete="codigo = $event" />
    <Text fz="sm" c="var(--ds-text-3)">
      <template v-if="codigo">Verificando {{ codigo }}…</template>
      <template v-else>Não recebeu? <Anchor fz="sm">Reenviar código</Anchor></template>
    </Text>
  </Stack>
</template>
