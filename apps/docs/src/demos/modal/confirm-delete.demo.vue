<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { Button, Group, Modal, Text } from '@jcdecor/vue';
import { useDisclosure } from '@mantine-vue/hooks';
import { IconTrash } from '@tabler/icons-vue';

const [opened, { open, close }] = useDisclosure(false);
</script>

<template>
  <Modal :opened="opened" title="Excluir produto?" size="sm" @close="close">
    <Text fz="sm" c="var(--ds-text-2)">
      O produto <b>Papel de parede Linho Areia</b> será removido da loja e de 3 coleções. Pedidos já feitos não são afetados. Esta ação não pode
      ser desfeita.
    </Text>
    <Group justify="flex-end" mt="lg">
      <Button variant="outline" data-autofocus @click="close">Cancelar</Button>
      <Button color="danger" @click="close">
        <template #leftSection><IconTrash :size="16" /></template>
        Excluir produto
      </Button>
    </Group>
  </Modal>

  <Button variant="outline" color="danger" @click="open">
    <template #leftSection><IconTrash :size="18" /></template>
    Excluir produto
  </Button>
</template>
