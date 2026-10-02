import { ActionIcon, Menu, SimpleGrid } from '@jcdecor/ui';
import { BarChart, ChartCard, DonutChart } from '@jcdecor/ui/charts';
import { IconDots, IconDownload, IconMaximize } from '@tabler/icons-react';

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

function CardMenu() {
  return (
    <Menu position="bottom-end" withinPortal>
      <Menu.Target>
        <ActionIcon variant="subtle" aria-label="Opções do gráfico">
          <IconDots size={18} />
        </ActionIcon>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item leftSection={<IconDownload size={16} />}>Exportar CSV</Menu.Item>
        <Menu.Item leftSection={<IconMaximize size={16} />}>Tela cheia</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

export default function Demo() {
  return (
    <SimpleGrid type="container" cols={{ base: 1, '560px': 2 }}>
      <ChartCard title="Acessos por canal" description="Setembro de 2026" actions={<CardMenu />}>
        <DonutChart data={canais} chartLabel="54.959" size={180} mx="auto" />
      </ChartCard>
      <ChartCard title="Pedidos por categoria" value="1.284" actions={<CardMenu />}>
        <BarChart
          data={categorias}
          dataKey="categoria"
          h={200}
          series={[{ name: 'pedidos', label: 'Pedidos' }]}
        />
      </ChartCard>
    </SimpleGrid>
  );
}
