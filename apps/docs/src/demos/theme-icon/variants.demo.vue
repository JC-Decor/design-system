<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { Group, Stack, ThemeIcon } from '@jcdecor/vue';
import { IconShieldCheck } from '@tabler/icons-vue';

const cores = ['horizon', 'evergreen', 'electric', 'danger', 'obsidian'];
const variants = ['filled', 'light', 'outline', 'default'] as const;
</script>

<template>
  <Stack>
    <Group v-for="variant in variants" :key="variant" justify="center">
      <ThemeIcon v-for="color in cores" :key="color" :variant="variant" :color="color" size="lg">
        <IconShieldCheck :size="20" />
      </ThemeIcon>
    </Group>
  </Stack>
</template>
