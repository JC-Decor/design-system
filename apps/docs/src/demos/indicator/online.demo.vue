<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { Avatar, Group, Indicator, Stack, Text } from '@jcdecor/vue';

const atendentes = [
  { nome: 'Ana Ribeiro', status: 'Online', color: 'evergreen', ativo: true },
  { nome: 'Bruno Carvalho', status: 'Ausente', color: 'electric', ativo: true },
  { nome: 'Carla Mendes', status: 'Offline', color: 'gray', ativo: false },
];
</script>

<template>
  <Group gap="xl">
    <Group v-for="a in atendentes" :key="a.nome" gap="sm">
      <Indicator :color="a.color" position="bottom-end" :offset="6" :size="12" with-border :disabled="!a.ativo">
        <Avatar :name="a.nome" color="initials" />
      </Indicator>
      <Stack :gap="0">
        <Text fz="sm" :fw="600">{{ a.nome }}</Text>
        <Text fz="xs" c="var(--ds-text-3)">{{ a.status }}</Text>
      </Stack>
    </Group>
  </Group>
</template>
