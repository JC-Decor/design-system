<script lang="ts">
export const meta = { centered: true, maxWidth: 380 };
</script>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { Combobox, ComboboxDropdown, ComboboxOption, ComboboxOptions, ComboboxTarget, Group, Text, TextInput, useCombobox } from '@jcdecor/vue';

const medidas = ['1,00 m', '1,40 m', '1,80 m', '2,00 m', '2,20 m', '2,60 m', '2,80 m', '3,00 m'];

const value = ref('');
const combobox = useCombobox({
  onDropdownOpen: () => combobox.selectFirstOption(),
});

const filtered = computed(() => medidas.filter((item) => item.startsWith(value.value.trim())));

const handleInput = (query: string) => {
  value.value = query;
  combobox.openDropdown();
  combobox.updateSelectedOptionIndex();
};

const handleSubmit = (val: string) => {
  value.value = val;
  combobox.closeDropdown();
};
</script>

<template>
  <Combobox :store="combobox" @option-submit="handleSubmit">
    <ComboboxTarget>
      <TextInput
        :model-value="value"
        label="Largura da cortina"
        description="Use as setas ↑ ↓ e Enter para escolher"
        placeholder="Ex.: 2,00 m"
        @update:model-value="handleInput"
        @click="combobox.openDropdown()"
        @focus="combobox.openDropdown()"
        @blur="combobox.closeDropdown()"
      />
    </ComboboxTarget>
    <ComboboxDropdown :hidden="filtered.length === 0">
      <ComboboxOptions>
        <ComboboxOption v-for="item in filtered" :key="item" :value="item">{{ item }}</ComboboxOption>
      </ComboboxOptions>
    </ComboboxDropdown>
  </Combobox>
  <Group gap="xs" mt="sm">
    <Text fz="xs" c="var(--ds-text-3)">Aberto: {{ combobox.dropdownOpened ? 'sim' : 'não' }}</Text>
  </Group>
</template>
