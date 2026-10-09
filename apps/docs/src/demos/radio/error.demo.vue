<script lang="ts">
export const meta = { centered: true, maxWidth: 420 };
</script>

<script setup lang="ts">
import { ref } from 'vue';
import { Button, Group, Radio, RadioGroup, Stack } from '@jcdecor/vue';

const value = ref<string | null>(null);
const submitted = ref(false);
</script>

<template>
  <Stack w="100%">
    <RadioGroup
      v-model="value"
      label="Período de entrega"
      :error="submitted && !value ? 'Escolha um período de entrega' : undefined"
      with-asterisk
    >
      <Group mt="xs">
        <Radio value="manha" label="Manhã (8h–12h)" />
        <Radio value="tarde" label="Tarde (13h–18h)" />
      </Group>
    </RadioGroup>
    <Button w="fit-content" @click="submitted = true">Continuar</Button>
  </Stack>
</template>
