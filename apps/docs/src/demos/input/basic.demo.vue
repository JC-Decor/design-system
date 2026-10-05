<script lang="ts">
export const meta = { centered: true, maxWidth: 420 };
</script>

<script setup lang="ts">
import { Input, InputWrapper } from '@jcdecor/vue';
import { IconSearch } from '@tabler/icons-vue';
</script>

<template>
  <InputWrapper label="Buscar produtos" description="Pesquise por nome, código ou coleção">
    <Input placeholder="Ex.: Carvalho natural">
      <template #leftSection><IconSearch :size="16" /></template>
    </Input>
  </InputWrapper>
</template>
