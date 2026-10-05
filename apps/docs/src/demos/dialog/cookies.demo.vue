<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { Button, Dialog, Group, Text } from '@jcdecor/vue';
import { useDisclosure } from '@mantine-vue/hooks';
import { IconCookie } from '@tabler/icons-vue';

const [opened, { toggle, close }] = useDisclosure(false);
</script>

<template>
  <Button variant="outline" @click="toggle">
    <template #leftSection><IconCookie :size="18" /></template>
    {{ opened ? 'Fechar aviso' : 'Mostrar aviso de cookies' }}
  </Button>

  <Dialog :opened="opened" with-close-button size="lg" :position="{ bottom: 24, left: 24 }" @close="close">
    <Group wrap="nowrap" align="flex-start" gap="sm" pr="lg">
      <IconCookie :size="24" color="var(--ds-primary)" :style="{ flexShrink: 0 }" />
      <div>
        <Text fz="sm" :fw="600">Usamos cookies</Text>
        <Text fz="xs" c="var(--ds-text-2)" :mt="4">
          Para lembrar seu carrinho e recomendar produtos. Você pode alterar suas preferências quando quiser.
        </Text>
      </div>
    </Group>
    <Group justify="flex-end" gap="xs" mt="md">
      <Button size="sm" variant="subtle" @click="close">Preferências</Button>
      <Button size="sm" @click="close">Aceitar todos</Button>
    </Group>
  </Dialog>
</template>
