<script lang="ts">
export const meta = { centered: true, maxWidth: 420 };
</script>

<script setup lang="ts">
import { TagsInput } from '@jcdecor/vue';
</script>

<template>
  <TagsInput
    label="Tags do produto"
    description="Digite e pressione Enter ou vírgula para criar uma tag"
    placeholder="Nova tag"
    :default-value="['impermeável', 'fácil instalação']"
    :split-chars="[',', 'Enter']"
    clearable
  />
</template>
