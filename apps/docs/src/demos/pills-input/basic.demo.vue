<script lang="ts">
export const meta = { centered: true, maxWidth: 420 };
</script>

<script setup lang="ts">
import { Pill, PillGroup, PillsInput, PillsInputField } from '@jcdecor/vue';
</script>

<template>
  <PillsInput label="Cores do ambiente" description="Pills e campo de texto no mesmo controle">
    <PillGroup>
      <Pill>Off-white</Pill>
      <Pill>Verde sálvia</Pill>
      <PillsInputField placeholder="Adicionar cor" />
    </PillGroup>
  </PillsInput>
</template>
