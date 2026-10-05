<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { ref } from 'vue';
import { ActionIcon, Button, Group, NumberInput, Popover, PopoverDropdown, PopoverTarget, Select, Stack, Text } from '@jcdecor/vue';
import { IconPencil } from '@tabler/icons-vue';

const brl = (value: number) => value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

const opened = ref(false);
const price = ref(249.9);
const draft = ref<number | string>(price.value);

const save = () => {
  price.value = Number(draft.value) || price.value;
  opened.value = false;
};
</script>

<template>
  <Group gap="xs">
    <Text :fw="700" fz="var(--type-headline-sm)" c="var(--ds-primary)">{{ brl(price) }}</Text>
    <Popover v-model:opened="opened" :width="280" position="bottom-start" with-arrow trap-focus return-focus>
      <PopoverTarget>
        <ActionIcon variant="subtle" aria-label="Editar preço" @click="opened = !opened">
          <IconPencil :size="18" />
        </ActionIcon>
      </PopoverTarget>
      <PopoverDropdown>
        <form @submit.prevent="save">
          <Stack gap="sm">
            <Text fz="sm" :fw="600">Editar preço</Text>
            <NumberInput
              v-model="draft"
              size="sm"
              label="Preço por caixa"
              prefix="R$ "
              decimal-separator=","
              thousand-separator="."
              :decimal-scale="2"
              fixed-decimal-scale
              :min="0"
              data-autofocus
            />
            <Select
              size="sm"
              label="Vale para"
              :data="['Todas as lojas', 'Somente e-commerce', 'Somente lojas físicas']"
              default-value="Todas as lojas"
              :combobox-props="{ withinPortal: false }"
            />
            <Group justify="flex-end" gap="xs">
              <Button size="sm" variant="subtle" @click="opened = false">Cancelar</Button>
              <Button size="sm" type="submit">Salvar</Button>
            </Group>
          </Stack>
        </form>
      </PopoverDropdown>
    </Popover>
  </Group>
</template>
