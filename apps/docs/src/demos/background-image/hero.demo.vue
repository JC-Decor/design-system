<script setup lang="ts">
import { BackgroundImage, Box, Button, Kicker, Text, Title } from '@jcdecor/vue';
</script>

<template>
  <BackgroundImage src="https://picsum.photos/seed/colecao/1200/600" w="100%">
    <Box
      :p="{ base: 'lg', sm: 48 }"
      :mih="280"
      :style="{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        borderRadius: 'inherit',
        background:
          'linear-gradient(90deg, color-mix(in srgb, var(--dc-obsidian) 88%, transparent) 0%, color-mix(in srgb, var(--dc-obsidian) 40%, transparent) 70%, transparent 100%)',
      }"
    >
      <Kicker c="var(--dc-electric)">Coleção Primavera 2026</Kicker>
      <Title :order="2" c="white" :mt="4" :maw="420">Papéis de parede botânicos</Title>
      <Text c="var(--dc-obsidian-100)" mt="xs" :maw="420">
        Estampas florais em tons naturais para quartos e salas. Frete grátis acima de R$ 499.
      </Text>
      <Button variant="accent" mt="lg" w="fit-content">Ver coleção</Button>
    </Box>
  </BackgroundImage>
</template>
