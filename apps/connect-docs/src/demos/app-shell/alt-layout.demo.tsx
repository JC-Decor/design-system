import { AppShell, Avatar, Badge, Group, Icon, Stack, Text, UnstyledButton } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { withoutPadding: true };

const links = [
  { label: 'Início', icon: 'home' },
  { label: 'Colaboradores', icon: 'users' },
  { label: 'Documentos', icon: 'doc' },
] as const;

export default function Demo() {
  return (
    <AppShell
      mode="static"
      layout="alt"
      h={420}
      header={{ height: 64 }}
      footer={{ height: 48 }}
      navbar={{ width: 220, breakpoint: 'sm' }}
      aside={{ width: 240, breakpoint: 'md' }}
      padding="lg"
    >
      <AppShell.Header>
        <Group h="100%" px="lg" gap="sm">
          <Avatar color="green" size="sm">
            AR
          </Avatar>
          <Text fw={700}>Ana Ribeiro</Text>
          <Badge variant="light" color="green">
            Ativo
          </Badge>
        </Group>
      </AppShell.Header>

      {/* Com layout="alt" a sidebar ocupa toda a altura e carrega a marca */}
      <AppShell.Navbar p="md" bg="var(--cn-sidebar)" c="white" withBorder={false}>
        <Text fw={700} fz={15} px="sm" pb="md">
          Connect JC
        </Text>
        <Stack gap={3}>
          {links.map((link, index) => (
            <UnstyledButton
              key={link.label}
              px="sm"
              py={10}
              fz="sm"
              fw={500}
              c={index === 1 ? 'white' : 'rgba(255,255,255,.72)'}
              bg={index === 1 ? 'rgba(255,255,255,.13)' : undefined}
              style={{ borderRadius: 'var(--ds-radius-sm)' }}
            >
              <Group gap={11} wrap="nowrap">
                <Icon name={link.icon} size={18} />
                {link.label}
              </Group>
            </UnstyledButton>
          ))}
        </Stack>
      </AppShell.Navbar>

      <AppShell.Main>
        <Text fw={700}>Dados profissionais</Text>
        <Text fz="sm" c="var(--ds-text-2)">
          Analista de RH · Equipe Gente & Gestão · Admissão em 03/2022
        </Text>
        <Text fz="sm" c="var(--ds-text-2)">
          Gestor: Carlos Lima · Jornada 44h semanais
        </Text>
      </AppShell.Main>

      <AppShell.Aside p="md">
        <Stack gap={4}>
          <Text fw={700}>Resumo</Text>
          <Text fz="sm" c="var(--ds-text-2)">Férias: 18 dias disponíveis</Text>
          <Text fz="sm" c="var(--ds-text-2)">Banco de horas: +12h30</Text>
          <Text fz="sm" c="var(--ds-text-2)">Próximo 1:1: 22/10</Text>
        </Stack>
      </AppShell.Aside>

      <AppShell.Footer>
        <Group h="100%" px="lg">
          <Text fz="xs" c="var(--ds-text-3)">
            Atualizado por Mariana Souza há 5 minutos
          </Text>
        </Group>
      </AppShell.Footer>
    </AppShell>
  );
}
