<script setup lang="ts">
import { Button, Tooltip, type MantineRadius, type TooltipProps } from '@jcdecor/vue';

defineProps<{
  label?: string;
  position?: TooltipProps['position'];
  withArrow?: boolean;
  radius?: MantineRadius;
}>();
</script>

<template>
  <Tooltip :label="label" :position="position" :with-arrow="withArrow" :radius="radius" opened>
    <Button variant="outline">Formas de pagamento</Button>
  </Tooltip>
</template>
