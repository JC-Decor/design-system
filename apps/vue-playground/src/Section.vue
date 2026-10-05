<script setup lang="ts">
import { Kicker, Headline, Subheadline } from '@jcdecor/vue';

defineProps<{ id: string; kicker: string; title: string; description?: string }>();
</script>

<template>
  <section :id="id" class="pg-section">
    <Kicker>{{ kicker }}</Kicker>
    <Headline size="lg" component="h2" mt="xs">{{ title }}</Headline>
    <Subheadline v-if="description" c="var(--ds-text-2)" mt="xs" maw="720px">{{ description }}</Subheadline>
    <slot />
  </section>
</template>
