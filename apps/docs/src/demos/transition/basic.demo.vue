<script lang="ts">
export const meta = { centered: true, maxWidth: 360 };
</script>

<script setup lang="ts">
import { Button, Paper, Stack, Text, Transition } from '@jcdecor/vue';
import { useDisclosure } from '@mantine-vue/hooks';

const [opened, { toggle }] = useDisclosure(false);
</script>

<template>
  <Stack :h="180" w="100%">
    <Button @click="toggle">{{ opened ? 'Fechar' : 'Aplicar cupom' }}</Button>
    <Transition :mounted="opened" transition="pop" :duration="200" timing-function="ease">
      <template #default="styles">
        <Paper with-border shadow="md" p="md" :style="styles">
          <Text :fw="600">Cupom PRIMEIRA10 aplicado</Text>
          <Text fz="sm" c="var(--ds-text-2)">Você economizou R$ 32,49.</Text>
        </Paper>
      </template>
    </Transition>
  </Stack>
</template>
