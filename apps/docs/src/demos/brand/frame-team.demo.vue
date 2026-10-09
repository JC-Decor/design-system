<script setup lang="ts">
import { Avatar, GreekFrame, SimpleGrid, Stack, Text } from '@jcdecor/vue';

const team = [
  { name: 'Ana Souza', role: 'Atendimento', img: 47 },
  { name: 'Bruno Lima', role: 'Instalação', img: 12 },
  { name: 'Carla Dias', role: 'Projetos', img: 32 },
  { name: 'Diego Rocha', role: 'Logística', img: 53 },
];

const photo = (img: number) => `https://i.pravatar.cc/240?img=${img}`;
</script>

<template>
  <SimpleGrid type="container" :cols="{ base: 2, '560px': 4 }" spacing="lg">
    <Stack v-for="p in team" :key="p.name" align="center" :gap="6">
      <GreekFrame :size="112">
        <Avatar :src="photo(p.img)" size="100%" radius="50%" :alt="p.name" />
      </GreekFrame>
      <Text :fw="600" fz="sm">{{ p.name }}</Text>
      <Text fz="xs" c="dimmed">{{ p.role }}</Text>
    </Stack>
  </SimpleGrid>
</template>
