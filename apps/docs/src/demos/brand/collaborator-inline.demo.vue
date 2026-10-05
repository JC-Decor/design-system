<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
// Por padrão usa currentColor: herda a cor do texto, como um ícone.
import { Button, Collaborator, Group, Text } from '@jcdecor/vue';
</script>

<template>
  <Group>
    <Button>
      <template #leftSection><Collaborator :size="18" /></template>
      Agendar instalação
    </Button>
    <Button variant="outline">
      <template #leftSection><Collaborator :size="18" /></template>
      Falar com um consultor
    </Button>
    <Text c="evergreen.7" :fw="600">
      <Collaborator :size="18" /> 3 instaladores disponíveis
    </Text>
  </Group>
</template>
