import { AppShell, Burger, Group, NavLink, Text, Title } from '@jcdecor/ui';
import { useDisclosure } from '@mantine/hooks';
import { IconBox, IconChartBar, IconLayoutDashboard, IconUsers } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { withoutPadding: true };

const links = [
  { label: 'Visão geral', icon: IconLayoutDashboard },
  { label: 'Pedidos', icon: IconBox },
  { label: 'Clientes', icon: IconUsers },
  { label: 'Relatórios', icon: IconChartBar },
];

export default function Demo() {
  const [opened, { toggle }] = useDisclosure(true);

  return (
    <AppShell
      mode="static"
      h={420}
      header={{ height: 56 }}
      navbar={{ width: 220, breakpoint: 'sm', collapsed: { mobile: !opened, desktop: !opened } }}
      padding="lg"
    >
      <AppShell.Header>
        <Group h="100%" px="md" gap="sm">
          <Burger opened={opened} onClick={toggle} size="sm" aria-label="Alternar menu" />
          <Text fw={600}>JC Decor · Painel</Text>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="sm">
        {links.map((link, index) => (
          <NavLink key={link.label} label={link.label} leftSection={<link.icon size={18} />} active={index === 1} />
        ))}
      </AppShell.Navbar>

      <AppShell.Main>
        <Title order={3}>Pedidos</Title>
        <Text c="var(--ds-text-2)" mt="xs">
          128 pedidos aguardando separação. Use o menu ao lado para navegar entre as áreas do painel.
        </Text>
      </AppShell.Main>
    </AppShell>
  );
}
