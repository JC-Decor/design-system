<script setup lang="ts">
import { PriceTag, SimpleGrid, Text } from '@jcdecor/vue';
</script>

<template>
  <SimpleGrid type="container" :cols="{ base: 2, '560px': 4 }" spacing="lg">
    <div>
      <Text fz="xs" c="var(--ds-text-3)" :mb="6">Só o preço</Text>
      <PriceTag :value="59.9" unit="/m²" />
    </div>
    <div>
      <Text fz="xs" c="var(--ds-text-3)" :mb="6">Com preço “de”</Text>
      <PriceTag :value="249.9" :old-value="319.9" />
    </div>
    <div>
      <Text fz="xs" c="var(--ds-text-3)" :mb="6">Parcelado sem juros</Text>
      <PriceTag :value="1299" :installments="{ count: 10 }" />
    </div>
    <div>
      <Text fz="xs" c="var(--ds-text-3)" :mb="6">Com juros + Pix</Text>
      <PriceTag :value="1299" :pix-discount="8" :installments="{ count: 12, interestFree: false }" />
    </div>
  </SimpleGrid>
</template>
