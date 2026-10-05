<script lang="ts">
export const meta = { centered: true, maxWidth: 420 };
</script>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { PasswordInput, Progress, Stack, Text } from '@jcdecor/vue';
import { IconCheck, IconX } from '@tabler/icons-vue';

const requisitos = [
  { re: /.{8,}/, label: 'Pelo menos 8 caracteres' },
  { re: /[0-9]/, label: 'Um número' },
  { re: /[A-Z]/, label: 'Uma letra maiúscula' },
  { re: /[^A-Za-z0-9]/, label: 'Um símbolo (!, @, #…)' },
];

const value = ref('');
const atendidos = computed(() => requisitos.filter((r) => r.re.test(value.value)).length);
const forca = computed(() => (atendidos.value / requisitos.length) * 100);
const color = computed(() => (forca.value === 100 ? 'evergreen' : forca.value > 50 ? 'electric' : 'danger'));
</script>

<template>
  <Stack gap="xs" w="100%">
    <PasswordInput v-model="value" label="Crie sua senha" placeholder="Senha" />
    <Progress :value="value ? forca : 0" :color="color" size="sm" aria-label="Força da senha" />
    <Text
      v-for="r in requisitos"
      :key="r.label"
      fz="sm"
      :c="r.re.test(value) ? 'var(--ds-success)' : 'var(--ds-text-3)'"
      :style="{ display: 'flex', alignItems: 'center', gap: '6px' }"
    >
      <IconCheck v-if="r.re.test(value)" :size="14" />
      <IconX v-else :size="14" />
      {{ r.label }}
    </Text>
  </Stack>
</template>
