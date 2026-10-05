<script setup lang="ts">
import { Sparkline } from '@jcdecor/vue/charts';
</script>

<template>
  <Sparkline :width="220" :data="[820, 940, 1100, 980, 1320, 1410, 1540]" />
</template>
