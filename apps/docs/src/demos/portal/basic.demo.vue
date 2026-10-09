<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { Button, Paper, Portal, Text } from '@jcdecor/vue';
import { useDisclosure } from '@mantine-vue/hooks';

const [opened, { toggle }] = useDisclosure(false);
</script>

<template>
  <Button @click="toggle">{{ opened ? 'Remover aviso' : 'Mostrar aviso fixo' }}</Button>
  <Portal v-if="opened">
    <Paper shadow="lg" with-border p="md" pos="fixed" :bottom="24" :right="24" :maw="320" :style="{ zIndex: 400 }">
      <Text :fw="600">Renderizado no document.body</Text>
      <Text fz="sm" c="var(--ds-text-2)">
        O Portal tira o conteúdo da árvore do DOM do componente, evitando cortes por overflow e z-index.
      </Text>
    </Paper>
  </Portal>
</template>
