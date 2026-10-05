<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { ref } from 'vue';
import {
  Button,
  Menu,
  MenuCheckboxGroup,
  MenuCheckboxItem,
  MenuDivider,
  MenuDropdown,
  MenuLabel,
  MenuRadioGroup,
  MenuRadioItem,
  MenuTarget,
} from '@jcdecor/vue';
import { IconAdjustments } from '@tabler/icons-vue';

const columns = ref(['cliente', 'total', 'status']);
const density = ref('confortavel');
</script>

<template>
  <Menu :width="240" position="bottom-start">
    <MenuTarget>
      <Button variant="outline">
        <template #leftSection><IconAdjustments :size="18" /></template>
        Exibição da tabela
      </Button>
    </MenuTarget>
    <MenuDropdown>
      <MenuLabel>Colunas visíveis</MenuLabel>
      <MenuCheckboxGroup v-model="columns">
        <MenuCheckboxItem value="cliente">Cliente</MenuCheckboxItem>
        <MenuCheckboxItem value="data">Data</MenuCheckboxItem>
        <MenuCheckboxItem value="total">Total</MenuCheckboxItem>
        <MenuCheckboxItem value="status">Status</MenuCheckboxItem>
      </MenuCheckboxGroup>

      <MenuDivider />
      <MenuLabel>Densidade</MenuLabel>
      <MenuRadioGroup v-model="density">
        <MenuRadioItem value="compacta">Compacta</MenuRadioItem>
        <MenuRadioItem value="confortavel">Confortável</MenuRadioItem>
      </MenuRadioGroup>
    </MenuDropdown>
  </Menu>
</template>
