<script setup lang="ts">
// Versão Vue da grade "Visão geral" da página de marca.
import { Collaborator, GreekFrame, JcLogo, JcLogoAlt, Paper, SimpleGrid, SpartanHelmet, Stack, Text } from '@jcdecor/vue';

const overview = [
  { name: 'JcLogo', component: JcLogo, size: 36 },
  { name: 'JcLogoAlt', component: JcLogoAlt, size: 44 },
  { name: 'SpartanHelmet', component: SpartanHelmet, size: 52 },
  { name: 'GreekFrame', component: GreekFrame, size: 56 },
  { name: 'Collaborator', component: Collaborator, size: 48 },
];
</script>

<template>
  <SimpleGrid type="container" :cols="{ base: 2, '560px': 5 }" spacing="md" mt="md">
    <Paper v-for="item in overview" :key="item.name" with-border p="md" :h="130">
      <Stack align="center" justify="space-between" h="100%">
        <Stack justify="center" :style="{ flex: 1 }">
          <component :is="item.component" :size="item.size" />
        </Stack>
        <Text fz="xs" :fw="600" ff="monospace">{{ item.name }}</Text>
      </Stack>
    </Paper>
  </SimpleGrid>
</template>
