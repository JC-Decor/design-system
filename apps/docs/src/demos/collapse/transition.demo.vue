<script lang="ts">
export const meta = { maxWidth: 480 };
</script>

<script setup lang="ts">
import { Button, Collapse, Paper, Stack, Text } from '@jcdecor/vue';
import { useDisclosure } from '@mantine-vue/hooks';

const [opened, { toggle }] = useDisclosure(false);
</script>

<template>
  <Stack gap="sm" w="100%">
    <Button :style="{ alignSelf: 'flex-start' }" @click="toggle">Calcular frete</Button>
    <Collapse :expanded="opened" :transition-duration="400" transition-timing-function="cubic-bezier(.2, 0, 0, 1)">
      <Paper with-border p="md">
        <Text :fw="600">Entrega para 01310-100</Text>
        <Text fz="sm" c="var(--ds-text-2)">Padrão: R$ 39,90 · 5 dias úteis — Expressa: R$ 69,90 · 2 dias úteis</Text>
      </Paper>
    </Collapse>
  </Stack>
</template>
