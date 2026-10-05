<script lang="ts">
export const meta = { centered: true, maxWidth: 420 };
</script>

<script setup lang="ts">
import { TagsInput } from '@jcdecor/vue';

const sugestoes = ['lançamento', 'mais vendido', 'antimofo', 'lavável', 'autocolante', 'acústico', 'antiderrapante', 'pet friendly'];
</script>

<template>
  <TagsInput
    label="Selos de destaque"
    placeholder="Escolha ou crie um selo"
    :data="sugestoes"
    :default-value="['lançamento']"
    :combobox-props="{ shadow: 'md' }"
  />
</template>
