<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { Stack, Switch } from '@jcdecor/vue';
import { IconCheck, IconX } from '@tabler/icons-vue';
</script>

<template>
  <Stack>
    <Switch size="lg" on-label="SIM" off-label="NÃO" default-checked label="Aceita produtos similares" />
    <Switch size="md" default-checked label="Mostrar preço com Pix">
      <template #thumbIcon><IconCheck :size="12" color="var(--mantine-color-horizon-6)" stroke="3" /></template>
    </Switch>
    <Switch label="Modo de férias da loja" label-position="left">
      <template #thumbIcon><IconX :size="12" stroke="3" /></template>
    </Switch>
  </Stack>
</template>
