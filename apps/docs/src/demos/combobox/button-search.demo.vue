<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { Button, Combobox, ComboboxDropdown, ComboboxEmpty, ComboboxOption, ComboboxOptions, ComboboxSearch, ComboboxTarget, Text, useCombobox } from '@jcdecor/vue';
import { IconChevronDown } from '@tabler/icons-vue';

const cidades = ['São Paulo', 'Campinas', 'Santos', 'Rio de Janeiro', 'Niterói', 'Belo Horizonte', 'Curitiba', 'Porto Alegre'];

const cidade = ref<string | null>(null);
const search = ref('');
const combobox = useCombobox({
  onDropdownClose: () => {
    combobox.resetSelectedOption();
    combobox.focusTarget();
    search.value = '';
  },
  onDropdownOpen: () => combobox.focusSearchInput(),
});

const options = computed(() => cidades.filter((item) => item.toLowerCase().includes(search.value.toLowerCase().trim())));

const handleSubmit = (val: string) => {
  cidade.value = val;
  combobox.closeDropdown();
};
</script>

<template>
  <Combobox :store="combobox" :width="260" position="bottom-start" @option-submit="handleSubmit">
    <ComboboxTarget :with-aria-attributes="false">
      <Button variant="outline" @click="combobox.toggleDropdown()">
        <template #rightSection><IconChevronDown :size="16" /></template>
        {{ cidade ?? 'Escolher cidade' }}
      </Button>
    </ComboboxTarget>

    <ComboboxDropdown>
      <ComboboxSearch v-model="search" placeholder="Buscar cidade" />
      <ComboboxOptions>
        <ComboboxOption v-for="item in options" :key="item" :value="item" :active="item === cidade">{{ item }}</ComboboxOption>
        <ComboboxEmpty v-if="options.length === 0">Nenhuma cidade encontrada</ComboboxEmpty>
      </ComboboxOptions>
    </ComboboxDropdown>
  </Combobox>

  <Text fz="sm" c="var(--ds-text-2)" mt="sm" ta="center">Frete calculado para: {{ cidade ?? '—' }}</Text>
</template>
