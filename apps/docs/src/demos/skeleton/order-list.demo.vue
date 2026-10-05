<script lang="ts">
export const meta = { centered: true, maxWidth: 480 };
</script>

<script setup lang="ts">
import { Group, Paper, Skeleton, Stack } from '@jcdecor/vue';
</script>

<template>
  <Paper with-border p="md">
    <Stack gap="md">
      <Group v-for="row in 3" :key="row" gap="sm" wrap="nowrap">
        <Skeleton :height="40" circle />
        <Stack :gap="8" :style="{ flex: 1 }">
          <Skeleton :height="12" width="45%" />
          <Skeleton :height="10" width="80%" />
        </Stack>
        <Skeleton :height="24" :width="72" radius="xl" />
      </Group>
    </Stack>
  </Paper>
</template>
