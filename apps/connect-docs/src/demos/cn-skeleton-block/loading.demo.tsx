import { useEffect, useState } from 'react';
import { Button, Card, CardHeader, SkeletonBlock, Stack, Text } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { maxWidth: 460, centered: true };

export default function Demo() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!loading) return;
    const t = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(t);
  }, [loading]);

  return (
    <Stack>
      {loading ? (
        <SkeletonBlock variant="profile" />
      ) : (
        <Card>
          <CardHeader title="Marina Souza" sub="Analista de RH · Matrícula 10482" />
          <Text fz="sm" mt="sm">Admissão em 03/02/2021 · Equipe Pessoas & Cultura</Text>
        </Card>
      )}
      <Button variant="ghost" onClick={() => setLoading(true)}>Recarregar perfil</Button>
    </Stack>
  );
}
