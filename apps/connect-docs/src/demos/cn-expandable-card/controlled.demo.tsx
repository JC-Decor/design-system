import { useState } from 'react';
import { Button, ExpandableCard, Group, Stack, Text } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { maxWidth: 600, centered: true };

export default function Demo() {
  const [aberto, setAberto] = useState(false);
  return (
    <Stack>
      <Group>
        <Button variant="ghost" onClick={() => setAberto((v) => !v)}>{aberto ? 'Recolher' : 'Expandir'} pelo botão</Button>
      </Group>
      <ExpandableCard icon="doc" title="Política de home office" expanded={aberto} onExpandedChange={setAberto}>
        <Text fz="sm">Até 3 dias remotos por semana, combinados com o gestor.</Text>
      </ExpandableCard>
    </Stack>
  );
}
