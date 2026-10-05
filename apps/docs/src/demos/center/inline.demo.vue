<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { Anchor, Center, Text } from '@jcdecor/vue';
import { IconArrowLeft } from '@tabler/icons-vue';
</script>

<template>
  <Anchor href="#" fz="sm">
    <Center inline>
      <IconArrowLeft :size="16" />
      <Text component="span" :ml="6" fz="sm">Voltar para o carrinho</Text>
    </Center>
  </Anchor>
</template>
