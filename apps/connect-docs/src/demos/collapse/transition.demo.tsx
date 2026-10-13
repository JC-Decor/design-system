import { Button, Collapse, Paper, Stack, Text } from '@jcdecor/connect-ui';
import { useDisclosure } from '@mantine/hooks';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { maxWidth: 480 };

export default function Demo() {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <Stack gap="sm" w="100%">
      <Button onClick={toggle} style={{ alignSelf: 'flex-start' }}>
        Simular férias
      </Button>
      <Collapse expanded={opened} transitionDuration={400} transitionTimingFunction="cubic-bezier(.2, 0, 0, 1)">
        <Paper withBorder p="md">
          <Text fw={700}>15 a 29 de dezembro · 15 dias</Text>
          <Text fz="sm" c="var(--ds-text-2)">
            Saldo após o período: 15 dias · Retorno em 30/12 · Aprovação do gestor necessária
          </Text>
        </Paper>
      </Collapse>
    </Stack>
  );
}
