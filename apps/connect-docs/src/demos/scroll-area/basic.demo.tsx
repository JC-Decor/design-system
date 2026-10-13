import { Avatar, Badge, Group, Paper, ScrollArea, Text } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

const nomes = ['Mariana Souza', 'Carlos Lima', 'Ana Ribeiro', 'João Pereira', 'Beatriz Costa'];
const equipes = ['Comercial', 'Financeiro', 'Logística', 'RH', 'Atendimento'];

const colaboradores = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  nome: nomes[i % 5],
  equipe: equipes[(i + 2) % 5],
  ferias: i % 4 === 1,
}));

export default function Demo() {
  return (
    <Paper withBorder w="100%">
      <ScrollArea h={260} px="md">
        {colaboradores.map((c) => (
          <Group key={c.id} justify="space-between" py="sm" style={{ borderBottom: '1px solid var(--ds-border-soft)' }}>
            <Group gap="sm">
              <Avatar name={c.nome} size="sm" />
              <div>
                <Text fz="sm" fw={600}>
                  {c.nome}
                </Text>
                <Text fz="xs" c="var(--ds-text-3)">
                  {c.equipe}
                </Text>
              </div>
            </Group>
            <Badge variant="light" color={c.ferias ? 'yellow' : 'green'}>
              {c.ferias ? 'Férias' : 'Ativo'}
            </Badge>
          </Group>
        ))}
      </ScrollArea>
    </Paper>
  );
}
