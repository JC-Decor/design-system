import { Button, Paper, Stack, Text, Transition } from '@jcdecor/ui';
import { useDisclosure } from '@mantine/hooks';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 360 };

export default function Demo() {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <Stack h={180} w="100%">
      <Button onClick={toggle}>{opened ? 'Fechar' : 'Aplicar cupom'}</Button>
      <Transition mounted={opened} transition="pop" duration={200} timingFunction="ease">
        {(styles) => (
          <Paper withBorder shadow="md" p="md" style={styles}>
            <Text fw={600}>Cupom PRIMEIRA10 aplicado</Text>
            <Text fz="sm" c="var(--ds-text-2)">
              Você economizou R$ 32,49.
            </Text>
          </Paper>
        )}
      </Transition>
    </Stack>
  );
}
