import { useState } from 'react';
import { Box, FloatingIndicator, Group, UnstyledButton, Text } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

const items = ['Descrição', 'Medidas', 'Instalação', 'Avaliações'];

export default function Demo() {
  const [root, setRoot] = useState<HTMLDivElement | null>(null);
  const [refs, setRefs] = useState<Record<string, HTMLButtonElement | null>>({});
  const [active, setActive] = useState(items[0]);

  const setRef = (item: string) => (node: HTMLButtonElement | null) => {
    refs[item] = node;
    setRefs(refs);
  };

  return (
    <Box ref={setRoot} pos="relative" style={{ borderBottom: '1px solid var(--ds-border-soft)' }}>
      <Group gap="lg">
        {items.map((item) => (
          <UnstyledButton key={item} ref={setRef(item)} onClick={() => setActive(item)} py="sm" style={{ position: 'relative', zIndex: 1 }}>
            <Text fz="sm" fw={600} c={active === item ? 'var(--ds-text)' : 'var(--ds-text-3)'}>
              {item}
            </Text>
          </UnstyledButton>
        ))}
      </Group>

      {/* O indicador acompanha o alvo; aqui ele vira uma linha de 2px na base. */}
      <FloatingIndicator
        target={refs[active]}
        parent={root}
        transitionDuration={200}
        style={{ borderBottom: '2px solid var(--ds-primary)' }}
      />
    </Box>
  );
}
