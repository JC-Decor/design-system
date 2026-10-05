<script setup lang="ts">
import { Fieldset, TextInput, type FieldsetVariant, type MantineRadius } from '@jcdecor/vue';

defineProps<{
  legend?: string;
  variant?: FieldsetVariant;
  radius?: MantineRadius;
  disabled?: boolean;
}>();
</script>

<template>
  <Fieldset :legend="legend" :variant="variant" :radius="radius" :disabled="disabled">
    <TextInput label="Nome" placeholder="Maria Souza" />
  </Fieldset>
</template>
