<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { Center, SegmentedControl } from '@jcdecor/vue';
</script>

<template>
  <Center>
    <SegmentedControl :data="['7 dias', '30 dias', '60 dias', '12 meses']" default-value="30 dias" />
  </Center>
</template>
