import { ActionIcon, AppShell, Avatar, Burger, Card, Group, Icon, SimpleGrid, Stack, Text, TextInput, ThemeIcon, Title, UnstyledButton } from '@jcdecor/connect-ui';
import { useDisclosure } from '@mantine/hooks';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { withoutPadding: true };

const links = [
  { label: 'Início', icon: 'home' },
  { label: 'Colaboradores', icon: 'users' },
  { label: 'Férias', icon: 'palm' },
  { label: 'Banco de horas', icon: 'clock' },
  { label: 'Comunicados', icon: 'megaphone' },
] as const;

const kpis = [
  { label: 'Colaboradores ativos', value: '248', icon: 'users', color: 'blue' },
  { label: 'Férias no mês', value: '12', icon: 'palm', color: 'green' },
  { label: 'Banco de horas', value: '+36h', icon: 'clock', color: 'yellow' },
] as const;

export default function Demo() {
  const [opened, { toggle }] = useDisclosure(true);

  return (
    <AppShell
      mode="static"
      h={460}
      header={{ height: 64 }}
      navbar={{ width: 264, breakpoint: 'sm', collapsed: { mobile: !opened, desktop: !opened } }}
      padding="lg"
    >
      <AppShell.Header>
        <Group h="100%" px="lg" gap="sm" wrap="nowrap">
          <Burger opened={opened} onClick={toggle} size="sm" aria-label="Alternar menu" />
          <TextInput
            placeholder="Buscar colaboradores, documentos…"
            leftSection={<Icon name="search" size={16} />}
            aria-label="Buscar"
            flex={1}
            maw={360}
          />
          <Group gap="xs" ml="auto" wrap="nowrap">
            <ActionIcon size="lg" aria-label="Notificações">
              <Icon name="bell" size={18} />
            </ActionIcon>
            <Avatar color="lavender">MS</Avatar>
          </Group>
        </Group>
      </AppShell.Header>

      {/* Sidebar navy do Connect: fundo da marca e texto branco */}
      <AppShell.Navbar p="md" bg="var(--cn-sidebar)" c="white" withBorder={false}>
        <Text fw={700} fz={15} px="sm" pb="md">
          Connect JC
        </Text>
        <Stack gap={3}>
          {links.map((link, index) => {
            const active = index === 1;
            return (
              <UnstyledButton
                key={link.label}
                px="sm"
                py={10}
                fz="sm"
                fw={500}
                c={active ? 'white' : 'rgba(255,255,255,.72)'}
                bg={active ? 'rgba(255,255,255,.13)' : undefined}
                style={{ borderRadius: 'var(--ds-radius-sm)' }}
              >
                <Group gap={11} wrap="nowrap">
                  <Icon name={link.icon} size={18} />
                  {link.label}
                </Group>
              </UnstyledButton>
            );
          })}
        </Stack>
      </AppShell.Navbar>

      <AppShell.Main>
        <Title order={2}>Colaboradores</Title>
        <Text c="var(--ds-text-3)" fz="sm" mb="lg">
          Visão geral da equipe em outubro.
        </Text>
        <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="md">
          {kpis.map((kpi) => (
            <Card key={kpi.label}>
              <Group justify="space-between" align="flex-start">
                <Text fz="sm" c="var(--ds-text-3)">
                  {kpi.label}
                </Text>
                <ThemeIcon variant="light" color={kpi.color} radius="md">
                  <Icon name={kpi.icon} size={16} />
                </ThemeIcon>
              </Group>
              <Text fz={26} fw={700} mt="xs">
                {kpi.value}
              </Text>
            </Card>
          ))}
        </SimpleGrid>
      </AppShell.Main>
    </AppShell>
  );
}
