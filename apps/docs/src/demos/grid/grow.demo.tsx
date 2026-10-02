import { Box, Grid } from '@jcdecor/ui';

function Item({ children }: { children: React.ReactNode }) {
  return (
    <Box p="md" bg="var(--ds-primary-soft)" c="var(--ds-primary)" fw={600} fz="sm" ta="center" style={{ borderRadius: 'var(--ds-radius-sm)' }}>
      {children}
    </Box>
  );
}

export default function Demo() {
  return (
    <Grid grow gap="md" w="100%">
      {[1, 2, 3, 4, 5].map((n) => (
        <Grid.Col key={n} span={4}>
          <Item>{n}</Item>
        </Grid.Col>
      ))}
    </Grid>
  );
}
