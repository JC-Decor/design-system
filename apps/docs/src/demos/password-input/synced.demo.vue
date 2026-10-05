<script lang="ts">
export const meta = { centered: true, maxWidth: 420 };
</script>

<script setup lang="ts">
import { ref } from 'vue';
import { PasswordInput, Stack } from '@jcdecor/vue';

const visible = ref(false);
</script>

<template>
  <Stack w="100%">
    <PasswordInput v-model:visible="visible" label="Nova senha" placeholder="Nova senha" />
    <PasswordInput v-model:visible="visible" label="Confirme a senha" placeholder="Repita a senha" />
  </Stack>
</template>
