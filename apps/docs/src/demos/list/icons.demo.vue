<script setup lang="ts">
import { List, ListItem, ThemeIcon } from '@jcdecor/vue';
import { IconCheck, IconX } from '@tabler/icons-vue';
</script>

<template>
  <List spacing="sm" center>
    <template #icon>
      <ThemeIcon color="evergreen" variant="light" :size="24" radius="xl">
        <IconCheck :size="14" />
      </ThemeIcon>
    </template>
    <ListItem>Resistente à água e a riscos</ListItem>
    <ListItem>Instalação sem cola, sobre o piso existente</ListItem>
    <ListItem>Manta acústica inclusa</ListItem>
    <ListItem>
      <template #icon>
        <ThemeIcon color="danger" variant="light" :size="24" radius="xl">
          <IconX :size="14" />
        </ThemeIcon>
      </template>
      Não indicado para áreas externas
    </ListItem>
  </List>
</template>
