<script setup lang="ts">
import { Button, Tooltip, type FloatingPosition, type MantineRadius } from '@jcdecor/vue';

defineProps<{
  label?: string;
  position?: FloatingPosition;
  withArrow?: boolean;
  radius?: MantineRadius;
}>();
</script>

<template>
  <Tooltip :label="label" :position="position" :with-arrow="withArrow" :radius="radius" opened>
    <Button variant="outline">Formas de pagamento</Button>
  </Tooltip>
</template>
