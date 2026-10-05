<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { Box, FloatingIndicator, Group, Text, UnstyledButton } from '@jcdecor/vue';

const items = ['Descrição', 'Medidas', 'Instalação', 'Avaliações'];

const root = ref<HTMLElement | null>(null);
const refs = reactive<Record<string, HTMLElement | null>>({});
const active = ref(items[0]);

const setRoot = (el: Element | null) => (root.value = el as HTMLElement | null);
const setRef = (item: string) => (el: Element | null) => (refs[item] = el as HTMLElement | null);
</script>

<template>
  <Box :root-ref="setRoot" pos="relative" :style="{ borderBottom: '1px solid var(--ds-border-soft)' }">
    <Group gap="lg">
      <UnstyledButton
        v-for="item in items"
        :key="item"
        :root-ref="setRef(item)"
        py="sm"
        :style="{ position: 'relative', zIndex: 1 }"
        @click="active = item"
      >
        <Text fz="sm" :fw="600" :c="active === item ? 'var(--ds-text)' : 'var(--ds-text-3)'">{{ item }}</Text>
      </UnstyledButton>
    </Group>

    <!-- O indicador acompanha o alvo; aqui ele vira uma linha de 2px na base. -->
    <FloatingIndicator
      :target="refs[active]"
      :parent="root"
      :transition-duration="200"
      :style="{ borderBottom: '2px solid var(--ds-primary)' }"
    />
  </Box>
</template>
