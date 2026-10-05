<script lang="ts">
export const meta = { centered: true, maxWidth: 360 };
</script>

<script setup lang="ts">
import { Box, Burger, Collapse, Group, NavLink, Paper, Text } from '@jcdecor/vue';
import { useDisclosure } from '@mantine-vue/hooks';

const links = ['Pisos', 'Papel de parede', 'Cortinas', 'Painéis ripados', 'Grama sintética'];

const [opened, { toggle }] = useDisclosure(false);
</script>

<template>
  <Paper with-border>
    <Group justify="space-between" px="md" py="sm">
      <Text :fw="700" c="var(--ds-text)">JC Decor</Text>
      <Burger
        :opened="opened"
        size="sm"
        aria-label="Menu de categorias"
        :aria-expanded="opened"
        @click="toggle"
      />
    </Group>
    <Collapse :expanded="opened">
      <Box px="xs" pb="xs">
        <NavLink v-for="link in links" :key="link" href="#" :label="link" @click.prevent />
      </Box>
    </Collapse>
  </Paper>
</template>
