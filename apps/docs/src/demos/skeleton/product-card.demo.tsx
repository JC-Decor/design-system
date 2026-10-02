import { useState } from 'react';
import { Button, Card, Group, Skeleton, Stack, Switch, Text } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 320 };

export default function Demo() {
  const [loading, setLoading] = useState(true);

  return (
    <Stack>
      <Switch checked={loading} onChange={(event) => setLoading(event.currentTarget.checked)} label="Carregando" />
      <Card>
        <Card.Section>
          <Skeleton visible={loading} radius={0}>
            <div
              style={{
                height: 160,
                background: 'linear-gradient(135deg, var(--mantine-color-evergreen-3), var(--mantine-color-evergreen-6))',
              }}
            />
          </Skeleton>
        </Card.Section>
        <Skeleton visible={loading} mt="md" w="70%">
          <Text fw={600}>Grama sintética Premium 25 mm</Text>
        </Skeleton>
        <Skeleton visible={loading} mt="xs">
          <Text fz="sm" c="var(--ds-text-2)">
            Toque macio, proteção UV e drenagem rápida.
          </Text>
        </Skeleton>
        <Skeleton visible={loading} mt="sm" w="40%">
          <Text fw={700} fz="lg" c="var(--ds-primary)">
            R$ 89,90/m²
          </Text>
        </Skeleton>
        <Group mt="md">
          <Skeleton visible={loading} w="auto">
            <Button size="sm">Adicionar ao carrinho</Button>
          </Skeleton>
        </Group>
      </Card>
    </Stack>
  );
}
