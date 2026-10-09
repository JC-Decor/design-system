<script lang="ts">
export const meta = { centered: true, maxWidth: 380 };
</script>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { Combobox, ComboboxChevron, ComboboxDropdown, ComboboxOption, ComboboxOptions, ComboboxTarget, Group, InputBase, InputPlaceholder, Text, ThemeIcon, useCombobox } from '@jcdecor/vue';
import { IconGrid4x4, IconLayoutBoardSplit, IconPlant2, IconWallpaper, IconWindow } from '@tabler/icons-vue';

const categorias = [
  { value: 'pisos', label: 'Pisos vinílicos', produtos: 128, icon: IconGrid4x4 },
  { value: 'papel', label: 'Papel de parede', produtos: 342, icon: IconWallpaper },
  { value: 'paineis', label: 'Painéis ripados', produtos: 56, icon: IconLayoutBoardSplit },
  { value: 'grama', label: 'Grama sintética', produtos: 18, icon: IconPlant2 },
  { value: 'cortinas', label: 'Cortinas', produtos: 74, icon: IconWindow },
];

const combobox = useCombobox({ onDropdownClose: () => combobox.resetSelectedOption() });
const value = ref<string | null>('papel');
const selected = computed(() => categorias.find((item) => item.value === value.value));

const handleSubmit = (val: string) => {
  value.value = val;
  combobox.closeDropdown();
};
</script>

<template>
  <Combobox :store="combobox" :within-portal="false" @option-submit="handleSubmit">
    <ComboboxTarget>
      <InputBase
        component="button"
        type="button"
        label="Categoria do anúncio"
        pointer
        right-section-pointer-events="none"
        multiline
        @click="combobox.toggleDropdown()"
      >
        <template #rightSection><ComboboxChevron /></template>
        <Group v-if="selected" gap="sm" wrap="nowrap">
          <ThemeIcon variant="light" radius="sm"><component :is="selected.icon" :size="16" /></ThemeIcon>
          <div>
            <Text fz="sm" :fw="500">{{ selected.label }}</Text>
            <Text fz="xs" c="dimmed">{{ selected.produtos }} produtos</Text>
          </div>
        </Group>
        <InputPlaceholder v-else>Escolha uma categoria</InputPlaceholder>
      </InputBase>
    </ComboboxTarget>

    <ComboboxDropdown>
      <ComboboxOptions>
        <ComboboxOption v-for="item in categorias" :key="item.value" :value="item.value" :active="item.value === value">
          <Group gap="sm" wrap="nowrap">
            <ThemeIcon variant="light" radius="sm"><component :is="item.icon" :size="16" /></ThemeIcon>
            <div>
              <Text fz="sm" :fw="500">{{ item.label }}</Text>
              <Text fz="xs" c="dimmed">{{ item.produtos }} produtos</Text>
            </div>
          </Group>
        </ComboboxOption>
      </ComboboxOptions>
    </ComboboxDropdown>
  </Combobox>
</template>
