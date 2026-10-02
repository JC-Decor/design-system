import { Button, Paper, Select, Stack, Text, Transition, type MantineTransition } from '@jcdecor/ui';
import { useState } from 'react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 360 };

const transitions: MantineTransition[] = [
  'fade', 'fade-up', 'fade-down', 'fade-left', 'fade-right', 'scale', 'scale-y', 'scale-x', 'pop', 'pop-top-left',
  'pop-bottom-right', 'slide-up', 'slide-down', 'skew-up', 'rotate-left',
];

export default function Demo() {
  const [transition, setTransition] = useState<MantineTransition>('fade-up');
  const [mounted, setMounted] = useState(true);

  return (
    <Stack h={240} w="100%">
      <Select label="Transição" data={transitions as string[]} value={transition as string} onChange={(v) => v && setTransition(v as MantineTransition)} />
      <Button variant="outline" onClick={() => setMounted((m) => !m)}>
        {mounted ? 'Esconder' : 'Mostrar'}
      </Button>
      <Transition mounted={mounted} transition={transition} duration={300}>
        {(styles) => (
          <Paper p="md" bg="var(--ds-primary-soft)" style={styles}>
            <Text fw={600} c="var(--ds-primary)">
              transition="{transition as string}"
            </Text>
          </Paper>
        )}
      </Transition>
    </Stack>
  );
}
