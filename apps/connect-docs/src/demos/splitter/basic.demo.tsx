import { Avatar, Badge, Group, Paper, Splitter, Stack, Text, UnstyledButton } from '@jcdecor/connect-ui';
import { useState } from 'react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { withoutPadding: true };

const colaboradores = [
  { id: 1, nome: 'Mariana Souza', sigla: 'MS', cargo: 'Analista de RH', equipe: 'Gente & Gestão', status: 'Ativo', cor: 'lavender' },
  { id: 2, nome: 'Carlos Lima', sigla: 'CL', cargo: 'Coordenador de logística', equipe: 'Logística', status: 'Férias', cor: 'yellow' },
  { id: 3, nome: 'Ana Ribeiro', sigla: 'AR', cargo: 'Executiva de contas', equipe: 'Comercial', status: 'Ativo', cor: 'green' },
];

export default function Demo() {
  const [selected, setSelected] = useState(colaboradores[0]);

  return (
    <Paper h={300} radius={0}>
      <Splitter h="100%">
        <Splitter.Pane defaultSize={38} min={25} max={60}>
          <Stack gap={0}>
            {colaboradores.map((c) => (
              <UnstyledButton
                key={c.id}
                onClick={() => setSelected(c)}
                p="md"
                bg={selected.id === c.id ? 'var(--ds-primary-soft)' : undefined}
                style={{ borderBottom: '1px solid var(--ds-border-soft)' }}
              >
                <Group gap="sm" wrap="nowrap">
                  <Avatar color={c.cor} size="sm">
                    {c.sigla}
                  </Avatar>
                  <div>
                    <Text fw={600} fz="sm">
                      {c.nome}
                    </Text>
                    <Text fz="xs" c="var(--ds-text-3)">
                      {c.equipe}
                    </Text>
                  </div>
                </Group>
              </UnstyledButton>
            ))}
          </Stack>
        </Splitter.Pane>
        <Splitter.Pane defaultSize={62} p="lg">
          <Group justify="space-between">
            <Text fz={16} fw={700}>
              {selected.nome}
            </Text>
            <Badge variant="light" color={selected.status === 'Ativo' ? 'green' : 'blue'}>
              {selected.status}
            </Badge>
          </Group>
          <Text fz="sm" c="var(--ds-text-2)" mt="xs">
            {selected.cargo} · {selected.equipe}
          </Text>
          <Text fz="sm" c="var(--ds-text-3)" mt="md">
            Arraste a divisória ou use as setas do teclado com ela em foco.
          </Text>
        </Splitter.Pane>
      </Splitter>
    </Paper>
  );
}
