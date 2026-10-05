<script lang="ts">
export const meta = { centered: true, maxWidth: 420 };
</script>

<script setup lang="ts">
import { PasswordInput } from '@jcdecor/vue';
</script>

<template>
  <PasswordInput
    label="Senha"
    description="Mínimo de 8 caracteres, com letras e números"
    placeholder="Sua senha"
    with-asterisk
  />
</template>
