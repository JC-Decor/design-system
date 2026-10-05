<script setup lang="ts">
import { Stack } from '@jcdecor/vue';
import { TypingIndicator } from '@jcdecor/vue/chat';
</script>

<template>
  <Stack gap="md" align="flex-start">
    <TypingIndicator />
    <TypingIndicator :names="['Ana']" />
    <TypingIndicator :names="['Ana', 'Bruno']" />
    <TypingIndicator :names="['Ana', 'Bruno', 'Lucas']" />
  </Stack>
</template>
