<script setup lang="ts">
import { computed, ref } from 'vue';
import { Checkbox, Stack } from '@jcdecor/vue';

const items = ref([
  { label: 'Piso vinílico Carvalho (4 caixas)', checked: true, key: 'piso' },
  { label: 'Rodapé poliestireno branco (6 un.)', checked: false, key: 'rodape' },
  { label: 'Manta acústica 2mm (9 m²)', checked: true, key: 'manta' },
]);

const allChecked = computed(() => items.value.every((item) => item.checked));
const indeterminate = computed(() => items.value.some((item) => item.checked) && !allChecked.value);

function toggleAll() {
  const checked = !allChecked.value;
  items.value.forEach((item) => (item.checked = checked));
}
</script>

<template>
  <Stack gap="xs">
    <Checkbox
      :checked="allChecked"
      :indeterminate="indeterminate"
      label="Selecionar todos os itens"
      @change="toggleAll"
    />
    <Stack gap="xs" :ml="32">
      <Checkbox v-for="item in items" :key="item.key" v-model="item.checked" :label="item.label" />
    </Stack>
  </Stack>
</template>
