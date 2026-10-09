<script lang="ts">
export const meta = { centered: true, maxWidth: 420 };
</script>

<script setup lang="ts">
import { Input, InputWrapper, Stack } from '@jcdecor/vue';
</script>

<template>
  <Stack w="100%">
    <InputWrapper
      id="ambiente"
      label="Ambiente"
      description="Usado para recomendar produtos"
      error="Informe o ambiente que será reformado"
      with-asterisk
    >
      <Input id="ambiente" placeholder="Ex.: Sala de estar" error />
    </InputWrapper>
    <InputWrapper id="medida" label="Medida da parede" description="Largura × altura, em metros">
      <Input id="medida" placeholder="3,20 × 2,60" />
    </InputWrapper>
  </Stack>
</template>
