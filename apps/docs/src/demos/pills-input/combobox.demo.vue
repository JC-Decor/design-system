<script lang="ts">
export const meta = { centered: true, maxWidth: 420 };
</script>

<script setup lang="ts">
import { computed, ref } from 'vue';
import {
  CheckIcon,
  Combobox,
  ComboboxDropdown,
  ComboboxDropdownTarget,
  ComboboxEmpty,
  ComboboxEventsTarget,
  ComboboxOption,
  ComboboxOptions,
  Group,
  Pill,
  PillGroup,
  PillsInput,
  PillsInputField,
  useCombobox,
} from '@jcdecor/vue';

const categorias = ['Pisos vinílicos', 'Papel de parede', 'Painéis ripados', 'Grama sintética', 'Cortinas', 'Tatames', 'Carpetes'];

const combobox = useCombobox({
  onDropdownClose: () => combobox.resetSelectedOption(),
  onDropdownOpen: () => combobox.updateSelectedOptionIndex('active'),
});
const search = ref('');
const value = ref<string[]>(['Cortinas']);

const toggle = (item: string) => {
  value.value = value.value.includes(item) ? value.value.filter((v) => v !== item) : [...value.value, item];
};

const options = computed(() => categorias.filter((item) => item.toLowerCase().includes(search.value.trim().toLowerCase())));

const handleSearch = (query: string) => {
  combobox.updateSelectedOptionIndex();
  search.value = query;
};

const handleBackspace = (event: KeyboardEvent) => {
  if (search.value.length === 0 && value.value.length > 0) {
    event.preventDefault();
    toggle(value.value[value.value.length - 1]);
  }
};
</script>

<template>
  <Combobox :store="combobox" @option-submit="toggle">
    <ComboboxDropdownTarget>
      <PillsInput label="Categorias do pedido" @click="combobox.openDropdown()">
        <PillGroup>
          <Pill v-for="item in value" :key="item" with-remove-button @remove="toggle(item)">{{ item }}</Pill>
          <ComboboxEventsTarget>
            <PillsInputField
              :model-value="search"
              placeholder="Buscar categoria"
              @update:model-value="handleSearch"
              @focus="combobox.openDropdown()"
              @blur="combobox.closeDropdown()"
              @keydown.backspace="handleBackspace"
            />
          </ComboboxEventsTarget>
        </PillGroup>
      </PillsInput>
    </ComboboxDropdownTarget>

    <ComboboxDropdown>
      <ComboboxOptions>
        <ComboboxOption v-for="item in options" :key="item" :value="item" :active="value.includes(item)">
          <Group gap="sm">
            <CheckIcon v-if="value.includes(item)" :size="12" />
            <span>{{ item }}</span>
          </Group>
        </ComboboxOption>
        <ComboboxEmpty v-if="options.length === 0">Nenhuma categoria encontrada</ComboboxEmpty>
      </ComboboxOptions>
    </ComboboxDropdown>
  </Combobox>
</template>
