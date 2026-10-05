<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { Button, Dialog, Group, Text, TextInput } from '@jcdecor/vue';
import { useDisclosure } from '@mantine-vue/hooks';
import { IconMail } from '@tabler/icons-vue';

const [opened, { toggle, close }] = useDisclosure(false);
</script>

<template>
  <Button variant="outline" @click="toggle">
    <template #leftSection><IconMail :size="18" /></template>
    {{ opened ? 'Fechar convite' : 'Mostrar convite da newsletter' }}
  </Button>

  <Dialog :opened="opened" with-close-button size="lg" @close="close">
    <Text fz="sm" :fw="600" :mb="4">Ganhe 10% na primeira compra</Text>
    <Text fz="xs" c="var(--ds-text-2)" mb="sm">Receba lançamentos e ideias de decoração toda semana.</Text>
    <Group gap="xs" wrap="nowrap" align="flex-end">
      <TextInput size="sm" placeholder="seu@email.com" aria-label="E-mail" :style="{ flex: 1 }" />
      <Button size="sm" @click="close">Assinar</Button>
    </Group>
  </Dialog>
</template>
