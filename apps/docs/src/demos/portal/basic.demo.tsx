import { Button, Paper, Portal, Text } from '@jcdecor/ui';
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
            <Text fw={600}>Renderizado no document.body</Text>
            <Text fz="sm" c="var(--ds-text-2)">
              O Portal tira o conteúdo da árvore do DOM do componente, evitando cortes por overflow e z-index.
            </Text>
          </Paper>
        </Portal>
      )}
    </>
  );
}
