<script setup lang="ts">
import { Box, Flex, Stack, Text } from '@jcdecor/vue';

const justifies = ['flex-start', 'center', 'space-between', 'flex-end'] as const;

const item = {
  px: 'md',
  py: 'xs',
  bg: 'var(--ds-primary-soft)',
  c: 'var(--ds-primary)',
  fw: 600,
  fz: 'sm',
  style: { borderRadius: 'var(--ds-radius-sm)' },
};
</script>

<template>
  <Stack gap="md" w="100%">
    <div v-for="justify in justifies" :key="justify">
      <Text fz="xs" c="var(--ds-text-3)" :mb="4">justify="{{ justify }}"</Text>
      <Flex
        :justify="justify"
        gap="sm"
        p="xs"
        :style="{ border: '1px dashed var(--ds-border)', borderRadius: 'var(--ds-radius-sm)' }"
      >
        <Box v-for="n in 3" :key="n" v-bind="item">{{ n }}</Box>
      </Flex>
    </div>
  </Stack>
</template>
