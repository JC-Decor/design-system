<script lang="ts">
export const meta = { centered: true, maxWidth: 280 };
</script>

<script setup lang="ts">
import { ref } from 'vue';
import { ActionIcon, Box, Card, CardSection, Text, ThemeIcon } from '@jcdecor/vue';
import { IconHeart, IconHeartFilled, IconWallpaper } from '@tabler/icons-vue';

const favorito = ref(false);
</script>

<template>
  <Card with-border padding="md">
    <CardSection pos="relative">
      <Box :h="160" bg="var(--ds-surface-2)" :style="{ display: 'grid', placeItems: 'center' }">
        <ThemeIcon variant="light" :size="56" radius="md">
          <IconWallpaper :size="32" />
        </ThemeIcon>
      </Box>
      <ActionIcon
        pos="absolute"
        :top="12"
        :right="12"
        variant="default"
        radius="xl"
        :aria-label="favorito ? 'Remover dos favoritos' : 'Adicionar aos favoritos'"
        :aria-pressed="favorito"
        @click="favorito = !favorito"
      >
        <IconHeartFilled v-if="favorito" :size="18" color="var(--ds-error)" />
        <IconHeart v-else :size="18" />
      </ActionIcon>
    </CardSection>
    <Text :fw="600" mt="md">Papel de parede Folhagens</Text>
    <Text fz="sm" c="var(--ds-primary)" :fw="600">R$ 149,90/rolo</Text>
  </Card>
</template>
