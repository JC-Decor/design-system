<script lang="ts">
export const meta = { centered: true, maxWidth: 360 };
</script>

<script setup lang="ts">
// Em templates Vue, <Transition> é sempre o nativo do Vue: o do Mantine é exportado como MantineTransition.
import { ref } from 'vue';
import { Button, Paper, Select, Stack, Text, MantineTransition } from '@jcdecor/vue';

const transitions = [
  'fade', 'fade-up', 'fade-down', 'fade-left', 'fade-right', 'scale', 'scale-y', 'scale-x', 'pop', 'pop-top-left',
  'pop-bottom-right', 'slide-up', 'slide-down', 'skew-up', 'rotate-left',
] as const;

const transition = ref<(typeof transitions)[number]>('fade-up');
const mounted = ref(true);
</script>

<template>
  <Stack :h="240" w="100%">
    <Select v-model="transition" label="Transição" :data="transitions" :allow-deselect="false" />
    <Button variant="outline" @click="mounted = !mounted">{{ mounted ? 'Esconder' : 'Mostrar' }}</Button>
    <MantineTransition :mounted="mounted" :transition="transition" :duration="300">
      <template #default="styles">
        <Paper p="md" bg="var(--ds-primary-soft)" :style="styles">
          <Text :fw="600" c="var(--ds-primary)">transition="{{ transition }}"</Text>
        </Paper>
      </template>
    </MantineTransition>
  </Stack>
</template>
