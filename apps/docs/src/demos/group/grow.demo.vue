<script lang="ts">
export const meta = { centered: true, maxWidth: 520 };
</script>

<script setup lang="ts">
import { Button, Group, Stack, Text } from '@jcdecor/vue';
</script>

<template>
  <Stack gap="lg" w="100%">
    <div>
      <Text fz="xs" c="var(--ds-text-3)" :mb="4">grow</Text>
      <Group grow>
        <Button variant="outline">Cancelar</Button>
        <Button>Confirmar entrega</Button>
      </Group>
    </div>
    <div>
      <Text fz="xs" c="var(--ds-text-3)" :mb="4">grow + :prevent-grow-overflow="false"</Text>
      <Group grow :prevent-grow-overflow="false" wrap="nowrap">
        <Button variant="outline">Voltar</Button>
        <Button>Ir para pagamento com Pix</Button>
      </Group>
    </div>
  </Stack>
</template>
