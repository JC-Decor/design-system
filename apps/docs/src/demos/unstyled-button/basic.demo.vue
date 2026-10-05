<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { Group, Text, UnstyledButton } from '@jcdecor/vue';
import { IconRuler } from '@tabler/icons-vue';
</script>

<template>
  <UnstyledButton @click="() => undefined">
    <Group gap="xs">
      <IconRuler :size="18" color="var(--ds-primary)" />
      <Text fz="sm" :fw="500" c="var(--ds-primary)">Calcular quantidade de m²</Text>
    </Group>
  </UnstyledButton>
</template>
