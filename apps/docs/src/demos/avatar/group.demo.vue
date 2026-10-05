<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { Avatar, AvatarGroup, Group, Text, Tooltip, TooltipGroup } from '@jcdecor/vue';

const equipe = ['Ana Ribeiro', 'Bruno Carvalho', 'Carla Mendes', 'Diego Santos'];
</script>

<template>
  <Group gap="sm">
    <TooltipGroup :open-delay="200" :close-delay="100">
      <AvatarGroup>
        <Tooltip v-for="nome in equipe" :key="nome" :label="nome">
          <Avatar :name="nome" color="initials" />
        </Tooltip>
        <Tooltip label="Mais 5 atendentes">
          <Avatar>+5</Avatar>
        </Tooltip>
      </AvatarGroup>
    </TooltipGroup>
    <Text fz="sm" c="var(--ds-text-2)">9 atendentes online</Text>
  </Group>
</template>
