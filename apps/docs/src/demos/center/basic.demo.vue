<script setup lang="ts">
import { Center, Text } from '@jcdecor/vue';
</script>

<template>
  <Center
    :h="160"
    w="100%"
    bg="var(--ds-primary-soft)"
    c="var(--ds-primary)"
    :style="{ borderRadius: 'var(--ds-radius-sm)' }"
  >
    <Text :fw="600">Conteúdo centralizado nos dois eixos</Text>
  </Center>
</template>
