import { Box, SimpleGrid } from '@jcdecor/ui';

const cores = ['Areia', 'Grafite', 'Off-white', 'Linho', 'Terracota', 'Oliva', 'Marinho'];

export default function Demo() {
  return (
    <SimpleGrid minColWidth={140} autoFlow="auto-fill" spacing="sm" w="100%">
      {cores.map((cor) => (
        <Box
          key={cor}
          p="md"
          bg="var(--ds-primary-soft)"
          c="var(--ds-primary)"
          fw={600}
          fz="sm"
          ta="center"
          style={{ borderRadius: 'var(--ds-radius-sm)' }}
        >
          {cor}
        </Box>
      ))}
    </SimpleGrid>
  );
}
