<script lang="ts">
export const meta = { centered: true, maxWidth: 420 };
</script>

<script setup lang="ts">
import { Input, InputPlaceholder, InputWrapper } from '@jcdecor/vue';
import { IconCalendar } from '@tabler/icons-vue';
</script>

<template>
  <InputWrapper label="Data da instalação">
    <Input component="button" type="button" pointer>
      <template #leftSection><IconCalendar :size="16" /></template>
      <InputPlaceholder>Escolha uma data</InputPlaceholder>
    </Input>
  </InputWrapper>
</template>
