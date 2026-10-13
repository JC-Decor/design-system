import { useState } from 'react';
import { Button, Group, List, Modal, Stack, Text } from '@jcdecor/connect-ui';
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
        title="Política de home office"
        fullScreen={mode === 'always' || isMobile}
        transitionProps={{ transition: 'fade', duration: 200 }}
      >
        <Stack>
          <Text fz="sm" c="var(--ds-text-2)">
            Vigente a partir de 01/11. Leia até o fim e confirme a ciência para liberar a marcação de ponto remota.
          </Text>
          <List fz="sm" spacing="xs">
            <List.Item>Até 3 dias remotos por semana, combinados com o gestor.</List.Item>
            <List.Item>Ponto registrado pelo Painel, com geolocalização opcional.</List.Item>
            <List.Item>Auxílio home office de R$ 120 creditado no benefício flexível.</List.Item>
            <List.Item>Reuniões de equipe presenciais às terças.</List.Item>
          </List>
          <Button onClick={() => setMode(null)}>Li e estou ciente</Button>
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
