<script setup lang="ts">
import { ref } from 'vue';
import { Alert, Button, Group, Text } from '@jcdecor/vue';
import { IconAlertTriangle } from '@tabler/icons-vue';

const visible = ref(true);
</script>

<template>
  <Button v-if="!visible" variant="outline" size="sm" @click="visible = true">Mostrar alerta novamente</Button>

  <Alert
    v-else
    color="electric"
    title="Estoque baixo"
    with-close-button
    close-button-label="Dispensar alerta"
    @close="visible = false"
  >
    <template #icon><IconAlertTriangle /></template>
    <Text fz="sm">Restam apenas 4 caixas do piso vinílico Carvalho Natural (8,8 m²).</Text>
    <Group gap="xs" mt="sm">
      <Button size="xs">Repor estoque</Button>
      <Button size="xs" variant="subtle" @click="visible = false">Lembrar depois</Button>
    </Group>
  </Alert>
</template>
