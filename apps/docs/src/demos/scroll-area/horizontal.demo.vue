<script setup lang="ts">
import { Card, CardSection, Group, Image, ScrollArea, Text } from '@jcdecor/vue';

const ambientes = ['sala', 'quarto', 'cozinha', 'escritorio', 'varanda', 'banheiro', 'closet', 'jardim'];
const foto = (seed: string) => `https://picsum.photos/seed/${seed}/600/400`;
</script>

<template>
  <ScrollArea type="always" scrollbars="x" offset-scrollbars w="100%">
    <Group wrap="nowrap" gap="md">
      <Card v-for="ambiente in ambientes" :key="ambiente" padding="sm" :w="180" :style="{ flexShrink: 0 }">
        <CardSection>
          <Image :src="foto(ambiente)" :alt="ambiente" :h="110" />
        </CardSection>
        <Text :fw="600" fz="sm" mt="sm" tt="capitalize">{{ ambiente }}</Text>
      </Card>
    </Group>
  </ScrollArea>
</template>
