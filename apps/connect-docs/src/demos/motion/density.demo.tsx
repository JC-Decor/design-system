import { useState } from 'react';
import { Box, Group, Paper, SegmentedControl, SimpleGrid, Stack, Text } from '@jcdecor/connect-ui';

export default function Demo() {
  const [density, setDensity] = useState('regular');

  return (
    <Stack>
      <SegmentedControl
        w="fit-content"
        value={density}
        onChange={setDensity}
        data={[
          { value: 'compact', label: 'Compacta' },
          { value: 'regular', label: 'Regular' },
          { value: 'comfy', label: 'Confortável' },
        ]}
      />
      {/* A classe redefine --cn-pad para todos os blocos dentro dela */}
      <Box className={`cn-density-${density}`}>
        <SimpleGrid cols={{ base: 1, sm: 2 }}>
          {['Banco de horas', 'Próximas férias'].map((titulo) => (
            <Paper key={titulo} withBorder radius="lg" shadow="sm" p="var(--cn-pad)" style={{ transition: 'padding var(--cn-t)' }}>
              <Group justify="space-between">
                <Text fw={700}>{titulo}</Text>
                <Text fz="xs" c="var(--ds-text-3)" ff="monospace">--cn-pad</Text>
              </Group>
              <Text fz="sm" c="var(--ds-text-2)" mt={6}>O padding acompanha a densidade escolhida.</Text>
            </Paper>
          ))}
        </SimpleGrid>
      </Box>
    </Stack>
  );
}
