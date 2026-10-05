<script lang="ts">
export const meta = { maxWidth: 480, centered: true };
</script>

<script setup lang="ts">
import { ref } from 'vue';
import { Box, Button, Group, LoadingOverlay, NumberInput, Stack, TextInput, Textarea } from '@jcdecor/vue';

const saving = ref(false);

const save = () => {
  saving.value = true;
  window.setTimeout(() => (saving.value = false), 2000);
};
</script>

<template>
  <Box pos="relative">
    <LoadingOverlay :visible="saving" :z-index="10" :overlay-props="{ radius: 'md' }" />
    <Stack>
      <TextInput label="Nome do produto" default-value="Cortina blackout Grafite" />
      <Group grow>
        <NumberInput
          label="Preço"
          :default-value="329"
          prefix="R$ "
          decimal-separator=","
          thousand-separator="."
          :decimal-scale="2"
          fixed-decimal-scale
        />
        <NumberInput label="Estoque" :default-value="48" :min="0" />
      </Group>
      <Textarea label="Descrição" default-value="Bloqueia 100% da luz. Tecido com toque de linho, ilhós cromados." autosize :min-rows="2" />
      <Group justify="flex-end">
        <Button variant="subtle" :disabled="saving">Descartar</Button>
        <Button :loading="saving" @click="save">Salvar alterações</Button>
      </Group>
    </Stack>
  </Box>
</template>
