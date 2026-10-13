import { useState } from 'react';
import { Avatar, Badge, Button, Card, Group, Skeleton, Stack, Switch, Text } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 340 };

export default function Demo() {
  const [loading, setLoading] = useState(true);

  return (
    <Stack>
      <Switch checked={loading} onChange={(event) => setLoading(event.currentTarget.checked)} label="Carregando" />
      <Card>
        <Group wrap="nowrap">
          <Skeleton visible={loading} circle w="auto">
            <Avatar name="Marina Costa" size="lg" color="lavender" />
          </Skeleton>
          <Stack gap={6} style={{ flex: 1 }}>
            <Skeleton visible={loading} w="80%">
              <Text fw={700} fz="lg">
                Marina Costa
              </Text>
            </Skeleton>
            <Skeleton visible={loading} w="90%">
              <Text fz="sm" c="var(--ds-text-3)">
                Analista de RH Pleno
              </Text>
            </Skeleton>
          </Stack>
        </Group>
        <Group mt="md">
          <Skeleton visible={loading} w="auto" radius="xl">
            <Badge color="green">Ativo</Badge>
          </Skeleton>
        </Group>
        <Skeleton visible={loading} mt="md">
          <Button fullWidth>Ver perfil</Button>
        </Skeleton>
      </Card>
    </Stack>
  );
}
