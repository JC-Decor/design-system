<script setup lang="ts">
import { PasswordInput, SimpleGrid } from '@jcdecor/vue';
import { IconLock } from '@tabler/icons-vue';
</script>

<template>
  <SimpleGrid type="container" :cols="{ base: 1, '560px': 3 }" w="100%">
    <PasswordInput label="Com ícone" placeholder="Senha">
      <template #leftSection><IconLock :size="16" /></template>
    </PasswordInput>
    <PasswordInput label="Com erro" default-value="1234" error="A senha precisa ter 8 caracteres" />
    <PasswordInput label="Desabilitado" default-value="senhasecreta" disabled />
  </SimpleGrid>
</template>
