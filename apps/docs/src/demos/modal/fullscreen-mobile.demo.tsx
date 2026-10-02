import { useState } from 'react';
import { Button, Group, Image, Modal, Stack, Text } from '@jcdecor/ui';
import { useMediaQuery } from '@mantine/hooks';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  const [mode, setMode] = useState<'responsive' | 'always' | null>(null);
  const isMobile = useMediaQuery('(max-width: 48em)');

  return (
    <>
      <Modal
        opened={mode !== null}
        onClose={() => setMode(null)}
        title="Guia de instalação"
        fullScreen={mode === 'always' || isMobile}
        transitionProps={{ transition: 'fade', duration: 200 }}
      >
        <Stack>
          <Image radius="md" h={180} src="https://picsum.photos/seed/sala/800/400" alt="Sala com papel de parede" />
          <Text fz="sm" c="var(--ds-text-2)">
            1. Limpe e seque a parede. 2. Aplique a cola com rolo. 3. Posicione a primeira faixa no prumo e alise do centro para as bordas.
          </Text>
          <Button onClick={() => setMode(null)}>Entendi</Button>
        </Stack>
      </Modal>

      <Group justify="center">
        <Button variant="outline" onClick={() => setMode('responsive')}>
          Tela cheia só no mobile
        </Button>
        <Button variant="outline" onClick={() => setMode('always')}>
          Sempre em tela cheia
        </Button>
      </Group>
    </>
  );
}
