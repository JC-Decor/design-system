<script lang="ts">
export const meta = { centered: true, maxWidth: 420 };
</script>

<script setup lang="ts">
import { ref } from 'vue';
import { Anchor, Combobox, ComboboxDropdown, ComboboxFooter, ComboboxGroup, ComboboxHeader, ComboboxOption, ComboboxOptions, ComboboxTarget, TextInput, useCombobox } from '@jcdecor/vue';
import { IconSearch } from '@tabler/icons-vue';

const recentes = ['Piso vinílico carvalho', 'Papel de parede listrado', 'Cortina blackout cinza'];
const populares = ['Painel ripado', 'Grama sintética', 'Tatame infantil'];

const combobox = useCombobox();
const value = ref('');

const handleSubmit = (val: string) => {
  value.value = val;
  combobox.closeDropdown();
};
</script>

<template>
  <Combobox :store="combobox" @option-submit="handleSubmit">
    <ComboboxTarget>
      <TextInput
        v-model="value"
        label="Buscar produtos"
        placeholder="Ex.: piso para cozinha"
        @click="combobox.openDropdown()"
        @focus="combobox.openDropdown()"
        @blur="combobox.closeDropdown()"
      >
        <template #leftSection><IconSearch :size="18" /></template>
      </TextInput>
    </ComboboxTarget>

    <ComboboxDropdown>
      <ComboboxHeader>Sugestões para você</ComboboxHeader>
      <ComboboxOptions>
        <ComboboxGroup label="Buscas recentes">
          <ComboboxOption v-for="item in recentes" :key="item" :value="item">{{ item }}</ComboboxOption>
        </ComboboxGroup>
        <ComboboxGroup label="Mais buscados">
          <ComboboxOption v-for="item in populares" :key="item" :value="item">{{ item }}</ComboboxOption>
        </ComboboxGroup>
      </ComboboxOptions>
      <ComboboxFooter>
        <Anchor fz="sm" href="#" @click.prevent>Ver todas as categorias</Anchor>
      </ComboboxFooter>
    </ComboboxDropdown>
  </Combobox>
</template>
