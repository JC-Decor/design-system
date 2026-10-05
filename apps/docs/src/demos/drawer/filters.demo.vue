<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { Button, Checkbox, CheckboxGroup, Drawer, Group, RangeSlider, Stack, Text } from '@jcdecor/vue';
import { useDisclosure } from '@mantine-vue/hooks';
import { IconAdjustmentsHorizontal } from '@tabler/icons-vue';

const [opened, { open, close }] = useDisclosure(false);
</script>

<template>
  <Drawer :opened="opened" title="Filtros" position="right" @close="close">
    <Stack gap="lg">
      <CheckboxGroup label="Categoria" :default-value="['papel']">
        <Stack gap="xs" mt="xs">
          <Checkbox value="papel" label="Papel de parede" />
          <Checkbox value="tecido" label="Tecidos" />
          <Checkbox value="cortina" label="Cortinas" />
        </Stack>
      </CheckboxGroup>
      <div>
        <Text fz="sm" :fw="500" c="var(--ds-text-2)" mb="sm">Preço (R$)</Text>
        <RangeSlider
          :min="0"
          :max="500"
          :default-value="[50, 300]"
          :marks="[
            { value: 0, label: '0' },
            { value: 500, label: '500' },
          ]"
        />
      </div>
      <Group grow mt="md">
        <Button variant="outline" @click="close">Limpar</Button>
        <Button @click="close">Ver 86 produtos</Button>
      </Group>
    </Stack>
  </Drawer>

  <Button variant="outline" @click="open">
    <template #leftSection><IconAdjustmentsHorizontal :size="18" /></template>
    Filtros
  </Button>
</template>
