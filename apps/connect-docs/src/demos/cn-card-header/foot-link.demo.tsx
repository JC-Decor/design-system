import { Card, CardFootLink, CardHeader, Stack, Text } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { maxWidth: 420, centered: true };

export default function Demo() {
  return (
    <Card>
      <Stack gap={14}>
        <CardHeader title="Comunicados" sub="Últimos 7 dias" />
        <Text fz="sm">Novo calendário de feriados 2027 publicado pelo RH.</Text>
        <CardFootLink onClick={() => {}}>Ver todos os comunicados</CardFootLink>
      </Stack>
    </Card>
  );
}
