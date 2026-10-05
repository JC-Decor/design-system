<script setup lang="ts">
defineProps<{ title?: string }>();
</script>

<template>
  <div class="pg-demo">
    <p v-if="title" class="pg-demo-title">{{ title }}</p>
    <slot />
  </div>
</template>
