import { Box, Grid, Text } from '@jcdecor/ui';

function Item({ children }: { children: React.ReactNode }) {
  return (
    <Box p="md" bg="var(--ds-primary-soft)" c="var(--ds-primary)" fw={600} fz="sm" ta="center" style={{ borderRadius: 'var(--ds-radius-sm)' }}>
      {children}
    </Box>
  );
}

export default function Demo() {
  return (
    // Redimensione o container pela alça no canto inferior direito
    <Box w="100%" style={{ resize: 'horizontal', overflow: 'hidden', maxWidth: '100%', minWidth: 240 }}>
      <Text fz="xs" c="var(--ds-text-3)" mb="xs">
        Arraste o canto para redimensionar
      </Text>
      <Grid type="container" breakpoints={{ xs: '200px', sm: '400px', md: '600px', lg: '800px', xl: '1000px' }} gap="md">
        {[1, 2, 3, 4].map((n) => (
          <Grid.Col key={n} span={{ base: 12, sm: 6, md: 3 }}>
            <Item>Card {n}</Item>
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );
}
