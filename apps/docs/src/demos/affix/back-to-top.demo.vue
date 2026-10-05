<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { Affix, Button, Text, Transition } from '@jcdecor/vue';
import { useWindowScroll } from '@mantine-vue/hooks';
import { IconArrowUp } from '@tabler/icons-vue';

const [scroll, scrollTo] = useWindowScroll();
</script>

<template>
  <Text fz="sm" c="var(--ds-text-2)">Role a página: o botão aparece no canto inferior direito depois de 400px.</Text>

  <Affix :position="{ bottom: 24, right: 24 }">
    <Transition transition="slide-up" :mounted="scroll.y > 400">
      <template #default="transitionStyles">
        <Button :style="transitionStyles" radius="xl" variant="default" @click="scrollTo({ y: 0 })">
          <template #leftSection><IconArrowUp :size="16" /></template>
          Voltar ao topo
        </Button>
      </template>
    </Transition>
  </Affix>
</template>
