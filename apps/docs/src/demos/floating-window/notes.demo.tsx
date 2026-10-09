import { useState } from 'react';
import { ActionIcon, Button, FloatingWindow, Group, Text, Textarea } from '@jcdecor/ui';
import { IconArrowsDiagonal2, IconNotes, IconX } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Button variant="outline" leftSection={<IconNotes size={18} />} onClick={() => setOpened((value) => !value)}>
        {opened ? 'Fechar anotações' : 'Anotações do atendimento'}
      </Button>

      {opened && (
        <FloatingWindow
          p={0}
          initialPosition={{ bottom: 40, left: 40 }}
          dimensions={{ initialWidth: 320, initialHeight: 240, minWidth: 260, minHeight: 180, maxWidth: 560, maxHeight: 480 }}
          dragHandleSelector=".drag-handle"
          excludeDragHandleSelector="button"
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <Group className="drag-handle" justify="space-between" px="sm" py={6} style={{ cursor: 'move', borderBottom: '1px solid var(--ds-border-soft)' }}>
            <Text fz="sm" fw={600}>
              Pedido #10479 · Ana Ribeiro
            </Text>
            <ActionIcon variant="subtle" color="gray" size="sm" aria-label="Fechar" onClick={() => setOpened(false)}>
              <IconX size={16} />
            </ActionIcon>
          </Group>
          <Textarea
            variant="unstyled"
            placeholder="Anote o que o cliente pediu…"
            px="sm"
            style={{ flex: 1 }}
            py="xs"
            styles={{ wrapper: { height: '100%' }, input: { height: '100%', border: 0, background: 'transparent' } }}
            aria-label="Anotações"
          />
          <FloatingWindow.ResizeHandle
            aria-label="Redimensionar janela"
            pos="absolute"
            right={4}
            bottom={4}
            c="var(--ds-text-3)"
            style={{ cursor: 'nwse-resize', display: 'flex' }}
          >
            <IconArrowsDiagonal2 size={14} />
          </FloatingWindow.ResizeHandle>
        </FloatingWindow>
      )}
    </>
  );
}
