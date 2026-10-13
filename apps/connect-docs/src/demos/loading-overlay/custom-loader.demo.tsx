import { Box, Group, LoadingOverlay, Paper, Stack, Switch, Text } from '@jcdecor/connect-ui';
import { useDisclosure } from '@mantine/hooks';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { maxWidth: 320, centered: true };

const rows = [
  { label: 'Salário base', value: 'R$ 4.850,00' },
  { label: 'Horas extras (8h)', value: 'R$ 352,73' },
  { label: 'INSS', value: '− R$ 512,41' },
  { label: 'Vale-transporte', value: '− R$ 291,00' },
];

export default function Demo() {
  const [visible, { toggle }] = useDisclosure(true);

  return (
    <Stack>
      <Box pos="relative">
        <LoadingOverlay
          visible={visible}
          zIndex={10}
          overlayProps={{ radius: 'lg' }}
          loaderProps={{
            children: (
              <Stack align="center" gap={6}>
                <Text fz="sm" fw={600} c="var(--ds-text)">
                  Calculando a folha de outubro…
                </Text>
                <Text fz="xs" c="var(--ds-text-3)">
                  Isso leva alguns segundos
                </Text>
              </Stack>
            ),
          }}
        />
        <Paper withBorder radius="lg" p="lg">
          <Text fz={16} fw={700} mb="sm">
            Holerite · out/2026
          </Text>
          <Stack gap={6}>
            {rows.map((row) => (
              <Group key={row.label} justify="space-between">
                <Text fz="sm" c="var(--ds-text-2)">
                  {row.label}
                </Text>
                <Text fz="sm" fw={600}>
                  {row.value}
                </Text>
              </Group>
            ))}
          </Stack>
        </Paper>
      </Box>
      <Switch checked={visible} onChange={toggle} label="Carregando" />
    </Stack>
  );
}
