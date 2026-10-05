<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { Button, Group, Popover, PopoverDropdown, PopoverTarget, Text, TextInput } from '@jcdecor/vue';
import { IconTruckDelivery } from '@tabler/icons-vue';
</script>

<template>
  <Popover :width="300" position="bottom" with-arrow trap-focus>
    <PopoverTarget>
      <Button variant="outline">
        <template #leftSection><IconTruckDelivery :size="18" /></template>
        Calcular frete
      </Button>
    </PopoverTarget>
    <PopoverDropdown>
      <Text fz="sm" :fw="600" mb="xs">Informe seu CEP</Text>
      <Group gap="xs" wrap="nowrap" align="flex-end">
        <TextInput placeholder="00000-000" size="sm" aria-label="CEP" :style="{ flex: 1 }" />
        <Button size="sm">OK</Button>
      </Group>
      <Text fz="xs" c="var(--ds-text-3)" mt="xs">Frete grátis para o Sudeste acima de R$ 499.</Text>
    </PopoverDropdown>
  </Popover>
</template>
