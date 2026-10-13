import { useState } from 'react';
import { Button, Card, MotionWrapper, SimpleGrid, Stack, Text } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

const variants = ['fade', 'slideUp', 'scale', 'expand', 'none'] as const;

export default function Demo() {
  const [key, setKey] = useState(0);
  return (
    <Stack>
      <Button variant="ghost" onClick={() => setKey((k) => k + 1)} style={{ alignSelf: 'flex-start' }}>
        Repetir animação
      </Button>
      <SimpleGrid cols={{ base: 2, sm: 5 }} key={key}>
        {variants.map((variant, i) => (
          <MotionWrapper key={variant} variant={variant} delay={i * 80}>
            <Card padding="md">
              <Text fw={600} fz="sm">{variant}</Text>
              <Text fz="xs" c="dimmed">atraso {i * 80}ms</Text>
            </Card>
          </MotionWrapper>
        ))}
      </SimpleGrid>
    </Stack>
  );
}
