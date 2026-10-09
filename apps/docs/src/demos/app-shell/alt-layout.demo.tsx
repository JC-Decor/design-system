import { AppShell, Group, NavLink, Stack, Text } from '@jcdecor/ui';
import { IconBuildingStore, IconPackage, IconTruckDelivery } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { withoutPadding: true };

export default function Demo() {
  return (
    <AppShell
      mode="static"
      layout="alt"
      h={420}
      header={{ height: 56 }}
      footer={{ height: 48 }}
      navbar={{ width: 200, breakpoint: 'sm' }}
      aside={{ width: 240, breakpoint: 'md' }}
      padding="lg"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Text fw={600}>Pedido #48213</Text>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="sm">
        <Text fw={700} px="sm" py="xs">
          JC Decor
        </Text>
        <NavLink label="Loja" leftSection={<IconBuildingStore size={18} />} />
        <NavLink label="Pedidos" leftSection={<IconPackage size={18} />} active />
        <NavLink label="Entregas" leftSection={<IconTruckDelivery size={18} />} />
      </AppShell.Navbar>

      <AppShell.Main>
        <Text fw={600}>Itens do pedido</Text>
        <Text fz="sm" c="var(--ds-text-2)">
          Piso vinílico Carvalho Natural · 24 m² — Rodapé MDF branco · 18 m
        </Text>
      </AppShell.Main>

      <AppShell.Aside p="md">
        <Stack gap={4}>
          <Text fw={600}>Resumo</Text>
          <Text fz="sm" c="var(--ds-text-2)">Subtotal: R$ 3.249,90</Text>
          <Text fz="sm" c="var(--ds-text-2)">Frete: grátis</Text>
        </Stack>
      </AppShell.Aside>

      <AppShell.Footer>
        <Group h="100%" px="md">
          <Text fz="sm" c="var(--ds-text-3)">Última atualização há 5 minutos</Text>
        </Group>
      </AppShell.Footer>
    </AppShell>
  );
}
