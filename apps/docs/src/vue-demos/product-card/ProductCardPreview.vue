<script setup lang="ts">
// Prévia do playground: o Configurator não repassa listeners, e o CTA só aparece com `@action`.
import { ProductCard } from '@jcdecor/vue';

defineOptions({ inheritAttrs: false });
</script>

<template>
  <ProductCard v-bind="($attrs as any)" @action="() => {}" />
</template>
