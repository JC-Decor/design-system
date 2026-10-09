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
    <Grid gap="md" w="100%">
      <Grid.Col span={3}>
        <Item>span 3</Item>
      </Grid.Col>
      <Grid.Col span={3} offset={3}>
        <Item>span 3 · offset 3</Item>
      </Grid.Col>
      <Grid.Col span={4} offset={4}>
        <Item>span 4 · offset 4</Item>
      </Grid.Col>
    </Grid>
  );
}
