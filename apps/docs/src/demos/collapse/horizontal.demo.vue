<script setup lang="ts">
import { Box, Button, Collapse, Group, Text } from '@jcdecor/vue';
import { useDisclosure } from '@mantine-vue/hooks';

const [opened, { toggle }] = useDisclosure(true);
</script>

<template>
  <Group
    align="stretch"
    wrap="nowrap"
    :gap="0"
    :h="160"
    w="100%"
    :style="{ border: '1px solid var(--ds-border-soft)', borderRadius: 'var(--ds-radius-sm)', overflow: 'hidden' }"
  >
    <Collapse :expanded="opened" orientation="horizontal">
      <Box :w="200" h="100%" p="md" bg="var(--ds-surface-2)">
        <Text :fw="600" fz="sm">Filtros</Text>
        <Text fz="sm" c="var(--ds-text-2)">Cor, material, preço</Text>
      </Box>
    </Collapse>
    <Box p="md" :flex="1">
      <Button size="xs" variant="outline" @click="toggle">
        {{ opened ? 'Ocultar filtros' : 'Mostrar filtros' }}
      </Button>
    </Box>
  </Group>
</template>
