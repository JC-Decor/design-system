<script lang="ts">
export const meta = { centered: true, maxWidth: 420 };
</script>

<script setup lang="ts">
import { ref } from 'vue';
import { Button, FileButton, Group, List, ListItem, Stack, Text } from '@jcdecor/vue';
import { IconTrash, IconUpload } from '@tabler/icons-vue';

const fotos = ref<File[]>([]);
/** Recebe do FileButton a função que limpa o `<input type="file">`. */
let resetInput = () => {};

const limpar = () => {
  fotos.value = [];
  resetInput();
};
</script>

<template>
  <Stack>
    <Group>
      <FileButton v-model="fotos" :reset-ref="(reset: () => void) => (resetInput = reset)" accept="image/*" multiple v-slot="props">
        <Button variant="outline" v-bind="props">
          <template #leftSection><IconUpload :size="18" /></template>
          Escolher fotos
        </Button>
      </FileButton>
      <Button variant="subtle" color="danger" :disabled="fotos.length === 0" @click="limpar">
        <template #leftSection><IconTrash :size="18" /></template>
        Limpar
      </Button>
    </Group>
    <List v-if="fotos.length > 0" size="sm">
      <ListItem v-for="file in fotos" :key="file.name">{{ file.name }}</ListItem>
    </List>
    <Text v-else fz="sm" c="var(--ds-text-3)">Envie até 5 fotos do cômodo para receber uma sugestão de produto.</Text>
  </Stack>
</template>
