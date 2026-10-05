<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { Center, SegmentedControl } from '@jcdecor/vue';
</script>

<template>
  <Center>
    <SegmentedControl
      orientation="vertical"
      :data="['Todos os pedidos', 'Em separação', 'Enviados', 'Entregues']"
      default-value="Enviados"
    />
  </Center>
</template>
