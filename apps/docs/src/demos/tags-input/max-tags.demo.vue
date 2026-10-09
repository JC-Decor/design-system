<script lang="ts">
export const meta = { centered: true, maxWidth: 420 };
</script>

<script setup lang="ts">
import { ref } from 'vue';
import { TagsInput } from '@jcdecor/vue';

const value = ref<string[]>(['sala', 'quarto']);
</script>

<template>
  <TagsInput
    v-model="value"
    label="Ambientes do projeto"
    :description="`${value.length} de 4 ambientes`"
    :placeholder="value.length >= 4 ? undefined : 'Adicionar ambiente'"
    :max-tags="4"
    :data="['sala', 'quarto', 'cozinha', 'banheiro', 'varanda', 'escritório']"
  />
</template>
