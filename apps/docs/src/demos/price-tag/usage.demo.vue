<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { PriceTag } from '@jcdecor/vue';
</script>

<template>
  <PriceTag :value="89.9" :old-value="119.9" unit="/m²" :pix-discount="5" :installments="{ count: 6 }" />
</template>
