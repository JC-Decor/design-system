<script lang="ts">
export const meta = { centered: true, maxWidth: 360 };
</script>

<script setup lang="ts">
import { ref } from 'vue';
import { Button, Paper, Select, Stack, Text, Transition, type MantineTransition } from '@jcdecor/vue';

const transitions: MantineTransition[] = [
  'fade', 'fade-up', 'fade-down', 'fade-left', 'fade-right', 'scale', 'scale-y', 'scale-x', 'pop', 'pop-top-left',
  'pop-bottom-right', 'slide-up', 'slide-down', 'skew-up', 'rotate-left',
];

const transition = ref<MantineTransition>('fade-up');
const mounted = ref(true);
</script>

<template>
  <Stack :h="240" w="100%">
    <Select v-model="transition" label="Transição" :data="transitions" :allow-deselect="false" />
    <Button variant="outline" @click="mounted = !mounted">{{ mounted ? 'Esconder' : 'Mostrar' }}</Button>
    <Transition :mounted="mounted" :transition="transition" :duration="300">
      <template #default="styles">
        <Paper p="md" bg="var(--ds-primary-soft)" :style="styles">
          <Text :fw="600" c="var(--ds-primary)">transition="{{ transition }}"</Text>
        </Paper>
      </template>
    </Transition>
  </Stack>
</template>
