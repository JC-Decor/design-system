import { Button, Collapse, Paper, Stack, Text } from '@jcdecor/ui';
import { useDisclosure } from '@mantine/hooks';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { maxWidth: 480 };

export default function Demo() {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <Stack gap="sm" w="100%">
      <Button onClick={toggle} style={{ alignSelf: 'flex-start' }}>
        Calcular frete
      </Button>
      <Collapse expanded={opened} transitionDuration={400} transitionTimingFunction="cubic-bezier(.2, 0, 0, 1)">
        <Paper withBorder p="md">
          <Text fw={600}>Entrega para 01310-100</Text>
          <Text fz="sm" c="var(--ds-text-2)">
            Padrão: R$ 39,90 · 5 dias úteis — Expressa: R$ 69,90 · 2 dias úteis
          </Text>
        </Paper>
      </Collapse>
    </Stack>
  );
}
