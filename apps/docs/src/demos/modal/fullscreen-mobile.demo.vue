<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { ref } from 'vue';
import { Button, Group, Image, Modal, Stack, Text } from '@jcdecor/vue';
import { useMediaQuery } from '@mantine-vue/hooks';

const mode = ref<'responsive' | 'always' | null>(null);
const isMobile = useMediaQuery('(max-width: 48em)');
const photo = 'https://picsum.photos/seed/sala/800/400';
</script>

<template>
  <Modal
    :opened="mode !== null"
    title="Guia de instalação"
    :full-screen="mode === 'always' || isMobile"
    :transition-props="{ transition: 'fade', duration: 200 }"
    @close="mode = null"
  >
    <Stack>
      <Image radius="md" :h="180" :src="photo" alt="Sala com papel de parede" />
      <Text fz="sm" c="var(--ds-text-2)">
        1. Limpe e seque a parede. 2. Aplique a cola com rolo. 3. Posicione a primeira faixa no prumo e alise do centro para as bordas.
      </Text>
      <Button @click="mode = null">Entendi</Button>
    </Stack>
  </Modal>

  <Group justify="center">
    <Button variant="outline" @click="mode = 'responsive'">Tela cheia só no mobile</Button>
    <Button variant="outline" @click="mode = 'always'">Sempre em tela cheia</Button>
  </Group>
</template>
