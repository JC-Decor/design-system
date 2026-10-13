import { Box, Grid } from '@jcdecor/connect-ui';

function Item({ children }: { children: React.ReactNode }) {
  return (
    <Box p="md" bg="var(--ds-primary-soft)" c="var(--ds-primary)" fw={600} fz="sm" ta="center" h="100%" style={{ borderRadius: 'var(--ds-radius-sm)' }}>
      {children}
    </Box>
  );
}

export default function Demo() {
  return (
    <Grid gap="md" w="100%">
      <Grid.Col span={{ base: 12, sm: 4 }} order={{ base: 2, sm: 1 }}>
        <Item>Filtros por equipe (2º no mobile)</Item>
      </Grid.Col>
      <Grid.Col span={{ base: 12, sm: 8 }} order={{ base: 1, sm: 2 }}>
        <Item>Lista de colaboradores (1º no mobile)</Item>
      </Grid.Col>
    </Grid>
  );
}
