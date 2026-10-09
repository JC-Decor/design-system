<script setup lang="ts">
import { ref } from 'vue';
import { Button, CloseButton, Group, Paper, Text } from '@jcdecor/vue';
import { IconTruck } from '@tabler/icons-vue';

const aberto = ref(true);
</script>

<template>
  <Paper v-if="aberto" with-border p="md" radius="md" bg="var(--ds-primary-soft)">
    <Group justify="space-between" wrap="nowrap" align="flex-start">
      <Group gap="sm" wrap="nowrap">
        <IconTruck :size="20" color="var(--ds-primary)" />
        <Text fz="sm">Frete grátis para compras acima de R$ 299 nas regiões Sul e Sudeste.</Text>
      </Group>
      <CloseButton size="sm" aria-label="Fechar aviso" @click="aberto = false" />
    </Group>
  </Paper>
  <Button v-else variant="subtle" size="xs" @click="aberto = true">Mostrar aviso novamente</Button>
</template>
