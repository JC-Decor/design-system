import { Box, Burger, Collapse, Group, NavLink, Paper, Text } from '@jcdecor/ui';
import { useDisclosure } from '@mantine/hooks';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 360 };

const links = ['Pisos', 'Papel de parede', 'Cortinas', 'Painéis ripados', 'Grama sintética'];

export default function Demo() {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <Paper withBorder>
      <Group justify="space-between" px="md" py="sm">
        <Text fw={700} c="var(--ds-text)">
          JC Decor
        </Text>
        <Burger opened={opened} onClick={toggle} size="sm" aria-label="Menu de categorias" aria-expanded={opened} />
      </Group>
      <Collapse expanded={opened}>
        <Box px="xs" pb="xs">
          {links.map((link) => (
            <NavLink key={link} href="#" label={link} onClick={(event) => event.preventDefault()} />
          ))}
        </Box>
      </Collapse>
    </Paper>
  );
}
