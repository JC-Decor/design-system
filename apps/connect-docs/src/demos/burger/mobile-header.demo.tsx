import { Box, Burger, Collapse, Group, Icon, NavLink, Paper, Text } from '@jcdecor/connect-ui';
import { useDisclosure } from '@mantine/hooks';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 360 };

const links = [
  { label: 'Início', icon: 'home' },
  { label: 'Minha equipe', icon: 'users' },
  { label: 'Férias e folgas', icon: 'palm' },
  { label: 'Documentos', icon: 'doc' },
  { label: 'Comunicados', icon: 'megaphone' },
];

export default function Demo() {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <Paper withBorder>
      <Group justify="space-between" px="md" py="sm">
        <Text fw={700} c="var(--ds-text)">
          Connect JC
        </Text>
        <Burger opened={opened} onClick={toggle} size="sm" aria-label="Menu principal" aria-expanded={opened} />
      </Group>
      <Collapse expanded={opened}>
        <Box px="xs" pb="xs">
          {links.map((link) => (
            <NavLink
              key={link.label}
              href="#"
              label={link.label}
              leftSection={<Icon name={link.icon} size={16} />}
              onClick={(event) => event.preventDefault()}
            />
          ))}
        </Box>
      </Collapse>
    </Paper>
  );
}
