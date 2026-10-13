import { Button, Paper, Stack, Text, Transition } from '@jcdecor/connect-ui';
import { useDisclosure } from '@mantine/hooks';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 360 };

export default function Demo() {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <Stack h={180} w="100%">
      <Button onClick={toggle}>{opened ? 'Fechar' : 'Solicitar férias'}</Button>
      <Transition mounted={opened} transition="pop" duration={200} timingFunction="ease">
        {(styles) => (
          <Paper withBorder shadow="md" p="md" style={styles}>
            <Text fw={700}>Solicitação enviada</Text>
            <Text fz="sm" c="var(--ds-text-2)">
              Seu gestor tem até 5 dias úteis para aprovar.
            </Text>
          </Paper>
        )}
      </Transition>
    </Stack>
  );
}
