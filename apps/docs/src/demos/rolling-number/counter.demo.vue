<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { ref } from 'vue';
import { ActionIcon, Group, RollingNumber } from '@jcdecor/vue';
import { IconMinus, IconPlus } from '@tabler/icons-vue';

const quantidade = ref(2);
</script>

<template>
  <Group gap="md">
    <ActionIcon variant="default" size="lg" aria-label="Diminuir" @click="quantidade = Math.max(1, quantidade - 1)">
      <IconMinus :size="18" />
    </ActionIcon>
    <RollingNumber :value="quantidade" suffix=" caixas" fz="lg" :fw="600" :miw="110" ta="center" with-live-region />
    <ActionIcon variant="default" size="lg" aria-label="Aumentar" @click="quantidade++">
      <IconPlus :size="18" />
    </ActionIcon>
  </Group>
</template>
