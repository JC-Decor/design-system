<script lang="ts">
export const meta = { maxWidth: 320, centered: true };
</script>

<script setup lang="ts">
import { ref } from 'vue';
import { Box, Button, Image, Overlay, Stack, Text } from '@jcdecor/vue';

const hovered = ref(false);
const photo = 'https://picsum.photos/seed/cimento/600/480';
</script>

<template>
  <Box
    pos="relative"
    :h="240"
    :style="{ borderRadius: 'var(--ds-radius)', overflow: 'hidden' }"
    @mouseenter="hovered = true"
    @mouseleave="hovered = false"
  >
    <Image :src="photo" h="100%" alt="Revestimento Cimento Queimado" />
    <Overlay gradient="linear-gradient(180deg, transparent 30%, color-mix(in srgb, var(--dc-obsidian), transparent 15%) 100%)" :z-index="1">
      <Stack justify="flex-end" h="100%" p="md" :gap="4">
        <Text c="var(--dc-white)" :fw="600">Revestimento Cimento Queimado</Text>
        <Text c="var(--dc-white)" fz="sm" :opacity="0.85">A partir de R$ 89,90/m²</Text>
      </Stack>
    </Overlay>
    <Overlay v-if="hovered" :background-opacity="0.35" :blur="2" center :z-index="2">
      <Button variant="accent">Ver no ambiente</Button>
    </Overlay>
  </Box>
</template>
