import { useState } from 'react';
import { Box, UnstyledButton, FloatingIndicator, Group, Text } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

const tabs = [
  { value: 'todos', label: 'Todos', count: 128 },
  { value: 'pagos', label: 'Pagos', count: 96 },
  { value: 'enviados', label: 'Enviados', count: 24 },
  { value: 'cancelados', label: 'Cancelados', count: 8 },
];

export default function Demo() {
  const [root, setRoot] = useState<HTMLDivElement | null>(null);
  const [refs, setRefs] = useState<Record<string, HTMLButtonElement | null>>({});
  const [active, setActive] = useState('todos');

  const setRef = (value: string) => (node: HTMLButtonElement | null) => {
    refs[value] = node;
    setRefs(refs);
  };

  return (
    <Box
      ref={setRoot}
      pos="relative"
      p={4}
      bg="var(--ds-bg)"
      role="tablist"
      aria-label="Filtrar pedidos"
      style={{ borderRadius: 'var(--ds-radius)', border: '1px solid var(--ds-border-soft)' }}
    >
      <Group gap={4} wrap="nowrap">
        {tabs.map((tab) => (
          <UnstyledButton
            key={tab.value}
            ref={setRef(tab.value)}
            role="tab"
            aria-selected={active === tab.value}
            onClick={() => setActive(tab.value)}
            px="md"
            py={8}
            style={{ position: 'relative', zIndex: 1, borderRadius: 'var(--ds-radius-sm)' }}
          >
            <Group gap={6} wrap="nowrap">
              <Text fz="sm" fw={600} c={active === tab.value ? 'var(--ds-primary)' : 'var(--ds-text-2)'}>
                {tab.label}
              </Text>
              <Text fz="xs" c="var(--ds-text-3)">
                {tab.count}
              </Text>
            </Group>
          </UnstyledButton>
        ))}
      </Group>

      <FloatingIndicator
        target={refs[active]}
        parent={root}
        style={{ backgroundColor: 'var(--ds-surface)', borderRadius: 'var(--ds-radius-sm)', boxShadow: 'var(--ds-shadow-sm)' }}
      />
    </Box>
  );
}
