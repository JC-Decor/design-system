<script setup lang="ts">
import { Container, Stack } from '@jcdecor/vue';

const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
</script>

<template>
  <Stack gap="xs" w="100%">
    <Container
      v-for="size in sizes"
      :key="size"
      :size="size"
      w="100%"
      py="xs"
      bg="var(--ds-primary-soft)"
      c="var(--ds-primary)"
      fz="sm"
      :fw="600"
      ta="center"
      :style="{ borderRadius: 'var(--ds-radius-sm)' }"
    >
      size="{{ size }}"
    </Container>
  </Stack>
</template>
