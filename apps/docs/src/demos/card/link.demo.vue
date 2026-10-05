<script lang="ts">
export const meta = { centered: true, maxWidth: 360 };
</script>

<script setup lang="ts">
import { Card, CardSection, Group, Image, Text } from '@jcdecor/vue';
import { IconArrowRight } from '@tabler/icons-vue';
</script>

<template>
  <Card component="a" href="#inspiracao" shadow="sm" :style="{ textDecoration: 'none' }">
    <CardSection>
      <Image src="https://picsum.photos/seed/sala/600/400" :h="180" :radius="0" alt="Sala com painel ripado" />
    </CardSection>
    <Text :fw="600" mt="md">5 ideias de painel ripado para a sala</Text>
    <Text fz="sm" c="var(--ds-text-2)" :mt="4">
      Composições com LED, nichos e cores amadeiradas para valorizar a parede da TV.
    </Text>
    <Group :gap="4" mt="sm" c="var(--ds-link)" fz="sm" :fw="600">
      Ler artigo <IconArrowRight :size="16" />
    </Group>
  </Card>
</template>
