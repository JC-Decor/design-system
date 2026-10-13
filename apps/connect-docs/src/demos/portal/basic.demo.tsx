import { Button, Paper, Portal, Text } from '@jcdecor/connect-ui';
import { useDisclosure } from '@mantine/hooks';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <>
      <Button onClick={toggle}>{opened ? 'Remover aviso' : 'Mostrar aviso fixo'}</Button>
      {opened && (
        <Portal>
          <Paper shadow="lg" withBorder p="md" pos="fixed" bottom={24} right={24} maw={320} style={{ zIndex: 400 }}>
            <Text fw={700}>Ponto registrado às 08:58</Text>
            <Text fz="sm" c="var(--ds-text-2)">
              Este aviso é renderizado no document.body pelo Portal, fora da árvore do componente — sem cortes por overflow ou z-index.
            </Text>
          </Paper>
        </Portal>
      )}
    </>
  );
}
