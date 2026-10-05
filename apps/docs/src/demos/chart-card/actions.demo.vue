<script setup lang="ts">
import { ActionIcon, Menu, MenuDropdown, MenuItem, MenuTarget, SimpleGrid } from '@jcdecor/vue';
import { BarChart, ChartCard, DonutChart } from '@jcdecor/vue/charts';
import { IconDots, IconDownload, IconMaximize } from '@tabler/icons-vue';

const canais = [
  { name: 'Orgânico', value: 24100 },
  { name: 'Pago', value: 12900 },
  { name: 'Social', value: 8800 },
  { name: 'E-mail', value: 4100 },
  { name: 'Direto', value: 5059 },
];

const categorias = [
  { categoria: 'Pisos', pedidos: 412 },
  { categoria: 'Papel', pedidos: 286 },
  { categoria: 'Cortinas', pedidos: 241 },
  { categoria: 'Grama', pedidos: 198 },
  { categoria: 'Painéis', pedidos: 147 },
];
</script>

<template>
  <SimpleGrid type="container" :cols="{ base: 1, '560px': 2 }">
    <ChartCard title="Acessos por canal" description="Setembro de 2026">
      <template #actions>
        <Menu position="bottom-end" within-portal>
          <MenuTarget>
            <ActionIcon variant="subtle" aria-label="Opções do gráfico"><IconDots :size="18" /></ActionIcon>
          </MenuTarget>
          <MenuDropdown>
            <MenuItem>
              <template #leftSection><IconDownload :size="16" /></template>
              Exportar CSV
            </MenuItem>
            <MenuItem>
              <template #leftSection><IconMaximize :size="16" /></template>
              Tela cheia
            </MenuItem>
          </MenuDropdown>
        </Menu>
      </template>
      <DonutChart :data="canais" chart-label="54.959" :size="180" />
    </ChartCard>

    <ChartCard title="Pedidos por categoria" value="1.284">
      <template #actions>
        <Menu position="bottom-end" within-portal>
          <MenuTarget>
            <ActionIcon variant="subtle" aria-label="Opções do gráfico"><IconDots :size="18" /></ActionIcon>
          </MenuTarget>
          <MenuDropdown>
            <MenuItem>
              <template #leftSection><IconDownload :size="16" /></template>
              Exportar CSV
            </MenuItem>
            <MenuItem>
              <template #leftSection><IconMaximize :size="16" /></template>
              Tela cheia
            </MenuItem>
          </MenuDropdown>
        </Menu>
      </template>
      <BarChart :data="categorias" data-key="categoria" :height="200" :series="[{ name: 'pedidos', label: 'Pedidos' }]" />
    </ChartCard>
  </SimpleGrid>
</template>
