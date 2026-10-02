import { useState } from 'react';
import { ActionIcon, Button, FloatingWindow, Group, NumberInput, Stack, Text } from '@jcdecor/ui';
import { IconCalculator, IconGripVertical, IconX } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  const [opened, setOpened] = useState(false);
  const [width, setWidth] = useState(3.2);
  const [height, setHeight] = useState(2.6);

  const area = width * height;
  const rolls = Math.ceil((area * 1.1) / 5.3);

  return (
    <>
      <Button variant="outline" leftSection={<IconCalculator size={18} />} onClick={() => setOpened((value) => !value)}>
        {opened ? 'Fechar calculadora' : 'Abrir calculadora de rolos'}
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
                Calculadora de rolos
              </Text>
            </Group>
            <ActionIcon variant="subtle" color="gray" size="sm" aria-label="Fechar" onClick={() => setOpened(false)}>
              <IconX size={16} />
            </ActionIcon>
          </Group>

          <Stack p="md" gap="sm">
            <Group grow>
              <NumberInput size="sm" label="Largura (m)" value={width} onChange={(v) => setWidth(Number(v) || 0)} decimalScale={2} decimalSeparator="," min={0} />
              <NumberInput size="sm" label="Altura (m)" value={height} onChange={(v) => setHeight(Number(v) || 0)} decimalScale={2} decimalSeparator="," min={0} />
            </Group>
            <Text fz="xs" c="var(--ds-text-3)">
              Rolo de 0,53 × 10 m (5,3 m²) com 10% de margem de perda.
            </Text>
            <Group justify="space-between">
              <Text fz="sm" c="var(--ds-text-2)">
                {area.toLocaleString('pt-BR', { maximumFractionDigits: 2 })} m²
              </Text>
              <Text fw={700} c="var(--ds-primary)">
                {rolls} {rolls === 1 ? 'rolo' : 'rolos'}
              </Text>
            </Group>
          </Stack>
        </FloatingWindow>
      )}
    </>
  );
}
