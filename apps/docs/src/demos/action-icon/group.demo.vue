<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { ref } from 'vue';
import { ActionIcon, ActionIconGroup, ActionIconGroupSection, Group } from '@jcdecor/vue';
import { IconMinus, IconPlus } from '@tabler/icons-vue';

const quantidade = ref(2);
</script>

<template>
  <Group>
    <ActionIconGroup>
      <ActionIcon variant="default" size="lg" aria-label="Diminuir" :disabled="quantidade <= 1" @click="quantidade = Math.max(1, quantidade - 1)">
        <IconMinus :size="16" />
      </ActionIcon>
      <ActionIconGroupSection variant="default" size="lg" :miw="56">{{ quantidade }} cx</ActionIconGroupSection>
      <ActionIcon variant="default" size="lg" aria-label="Aumentar" @click="quantidade++">
        <IconPlus :size="16" />
      </ActionIcon>
    </ActionIconGroup>
  </Group>
</template>
