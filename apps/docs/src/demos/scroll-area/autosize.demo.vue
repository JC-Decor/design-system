<script lang="ts">
export const meta = { centered: true, maxWidth: 420 };
</script>

<script setup lang="ts">
import { ref } from 'vue';
import { Button, Group, Paper, ScrollAreaAutosize, Stack, Text } from '@jcdecor/vue';

const produtos = ['Piso vinílico Carvalho', 'Rodapé MDF branco', 'Manta acústica', 'Papel de parede Linho', 'Cola para papel', 'Painel ripado Freijó', 'Perfil de acabamento'];

const count = ref(2);
</script>

<template>
  <Stack w="100%">
    <Paper with-border>
      <ScrollAreaAutosize :mah="200" px="md">
        <Text v-for="p in produtos.slice(0, count)" :key="p" fz="sm" py="xs" :style="{ borderBottom: '1px solid var(--ds-border-soft)' }">
          {{ p }}
        </Text>
      </ScrollAreaAutosize>
    </Paper>
    <Group>
      <Button size="xs" @click="count = Math.min(count + 1, produtos.length)">Adicionar item</Button>
      <Button size="xs" variant="outline" @click="count = Math.max(count - 1, 1)">Remover item</Button>
    </Group>
  </Stack>
</template>
