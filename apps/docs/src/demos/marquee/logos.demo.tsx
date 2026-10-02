import { Marquee, Paper, Text } from '@jcdecor/ui';

const marcas = ['Durafloor', 'Tarkett', 'Eucafloor', 'Bobinex', 'Muresco', 'Santa Luzia', 'Quick-Step'];

export default function Demo() {
  return (
    <Marquee gap="md" duration={40000} fadeEdgeColor="var(--ds-surface)" w="100%">
      {marcas.map((marca) => (
        <Paper key={marca} withBorder px="lg" py="sm">
          <Text fw={600} c="var(--ds-text-2)" style={{ whiteSpace: 'nowrap' }}>
            {marca}
          </Text>
        </Paper>
      ))}
    </Marquee>
  );
}
