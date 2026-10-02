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
      <Grid.Col span="content">
        <Item>span="content"</Item>
      </Grid.Col>
      <Grid.Col span="auto">
        <Item>span="auto" (ocupa o resto)</Item>
      </Grid.Col>
      <Grid.Col span={3}>
        <Item>span 3</Item>
      </Grid.Col>
    </Grid>
  );
}
