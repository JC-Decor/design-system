import { useState } from 'react';
import { ActionIcon, Button, FloatingWindow, Group, Icon, NumberInput, Stack, Text } from '@jcdecor/connect-ui';
import { IconGripVertical } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  const [opened, setOpened] = useState(false);
  const [extra, setExtra] = useState(14.5);
  const [used, setUsed] = useState(6);

  const balance = extra - used;

  return (
    <>
      <Button variant="outline" leftSection={<Icon name="clock" size={16} />} onClick={() => setOpened((value) => !value)}>
        {opened ? 'Fechar calculadora' : 'Simular banco de horas'}
      </Button>

      {opened && (
        <FloatingWindow
          w={300}
          p={0}
          initialPosition={{ top: 120, right: 40 }}
          dragHandleSelector=".drag-handle"
          excludeDragHandleSelector="button"
          constrainOffset={16}
        >
          <Group className="drag-handle" justify="space-between" px="sm" py={6} style={{ cursor: 'move', borderBottom: '1px solid var(--ds-border-soft)' }}>
            <Group gap={6}>
              <IconGripVertical size={16} color="var(--ds-text-3)" />
              <Text fz="sm" fw={600}>
                Banco de horas
              </Text>
            </Group>
            <ActionIcon variant="subtle" color="gray" size="sm" aria-label="Fechar" onClick={() => setOpened(false)}>
              <Icon name="x" size={14} />
            </ActionIcon>
          </Group>

          <Stack p="md" gap="sm">
            <Group grow>
              <NumberInput size="sm" label="Horas extras" value={extra} onChange={(v) => setExtra(Number(v) || 0)} decimalScale={1} decimalSeparator="," min={0} />
              <NumberInput size="sm" label="Folgas usadas" value={used} onChange={(v) => setUsed(Number(v) || 0)} decimalScale={1} decimalSeparator="," min={0} />
            </Group>
            <Text fz="xs" c="var(--ds-text-3)">
              Saldo do ciclo atual; horas não compensadas em 6 meses são pagas na folha.
            </Text>
            <Group justify="space-between">
              <Text fz="sm" c="var(--ds-text-2)">
                Saldo
              </Text>
              <Text fw={700} c={balance >= 0 ? 'var(--ds-success)' : 'var(--ds-error)'}>
                {balance >= 0 ? '+' : ''}
                {balance.toLocaleString('pt-BR', { maximumFractionDigits: 1 })} h
              </Text>
            </Group>
          </Stack>
        </FloatingWindow>
      )}
    </>
  );
}
