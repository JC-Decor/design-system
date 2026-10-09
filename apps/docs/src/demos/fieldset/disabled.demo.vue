<script lang="ts">
export const meta = { centered: true, maxWidth: 520 };
</script>

<script setup lang="ts">
import { Button, Checkbox, Fieldset, Group, Stack, TextInput } from '@jcdecor/vue';
</script>

<template>
  <Fieldset legend="Endereço de cobrança" disabled w="100%">
    <Stack>
      <Checkbox label="Mesmo endereço de entrega" default-checked />
      <Group grow>
        <TextInput label="CEP" default-value="04077-000" />
        <TextInput label="Número" default-value="1200" />
      </Group>
      <Button w="fit-content" variant="outline">Salvar endereço</Button>
    </Stack>
  </Fieldset>
</template>
