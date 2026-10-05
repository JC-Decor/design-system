<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { ref } from 'vue';
import { Badge, Button, ComboboxPopover, ComboboxPopoverTarget } from '@jcdecor/vue';
import { IconFilter } from '@tabler/icons-vue';

const data = [
  { group: 'Ambiente', items: ['Sala', 'Quarto', 'Cozinha', 'Banheiro'] },
  { group: 'Entrega', items: ['Pronta entrega', 'Frete grátis', 'Retirada na loja'] },
];

const value = ref<string[]>(['Sala', 'Frete grátis']);
</script>

<template>
  <ComboboxPopover v-model="value" multiple :data="data" :combobox-props="{ width: 240, position: 'bottom-start' }">
    <ComboboxPopoverTarget>
      <Button variant="subtle">
        <template #leftSection><IconFilter :size="16" /></template>
        <template v-if="value.length > 0" #rightSection>
          <Badge size="sm" circle>{{ value.length }}</Badge>
        </template>
        Filtros
      </Button>
    </ComboboxPopoverTarget>
  </ComboboxPopover>
</template>
