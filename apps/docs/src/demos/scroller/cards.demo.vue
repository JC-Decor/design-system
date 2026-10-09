<script setup lang="ts">
import { Card, CardSection, Group, Image, Scroller, Text } from '@jcdecor/vue';

const produtos = ['piso', 'papel', 'painel', 'grama', 'cortina', 'tatame', 'carpete', 'rodape'];
const foto = (seed: string) => `https://picsum.photos/seed/${seed}/600/400`;
</script>

<template>
  <Scroller w="100%" :scroll-amount="400" :control-size="40" edge-gradient-color="var(--ds-surface)">
    <Group wrap="nowrap" gap="md" py="xs">
      <Card v-for="p in produtos" :key="p" padding="sm" :w="200" :style="{ flexShrink: 0 }">
        <CardSection>
          <Image :src="foto(p)" :alt="p" :h="120" :draggable="false" />
        </CardSection>
        <Text :fw="600" fz="sm" mt="sm" tt="capitalize">{{ p }}</Text>
      </Card>
    </Group>
  </Scroller>
</template>
