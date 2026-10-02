import { JcLogo, Paper, SimpleGrid, Stack, Text } from '@jcdecor/ui';

export default function Demo() {
  return (
    <SimpleGrid type="container" cols={{ base: 1, '560px': 2 }}>
      <Paper p="xl" withBorder bg="white">
        <Stack align="center" gap="xs">
          <JcLogo variant="light" size={56} />
          <Text fz="xs" c="gray.6">variant="light" — fundos claros</Text>
        </Stack>
      </Paper>
      <Paper p="xl" bg="obsidian.6">
        <Stack align="center" gap="xs">
          <JcLogo variant="dark" size={56} />
          <Text fz="xs" c="obsidian.2">variant="dark" — fundos escuros</Text>
        </Stack>
      </Paper>
    </SimpleGrid>
  );
}
