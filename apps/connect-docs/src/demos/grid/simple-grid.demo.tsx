import { Avatar, Card, Group, SimpleGrid, Text } from '@jcdecor/connect-ui';

const equipes = [
  { nome: 'Comercial', pessoas: 64, sigla: 'CO', cor: 'blue' },
  { nome: 'Logística', pessoas: 82, sigla: 'LO', cor: 'yellow' },
  { nome: 'Gente & Gestão', pessoas: 12, sigla: 'GG', cor: 'lavender' },
  { nome: 'Financeiro', pessoas: 18, sigla: 'FI', cor: 'green' },
];

export default function Demo() {
  return (
    <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="lg" w="100%">
      {equipes.map((e) => (
        <Card key={e.nome}>
          <Group gap="sm" wrap="nowrap">
            <Avatar color={e.cor}>{e.sigla}</Avatar>
            <div>
              <Text fw={700}>{e.nome}</Text>
              <Text fz="sm" c="var(--ds-text-3)">
                {e.pessoas} colaboradores
              </Text>
            </div>
          </Group>
        </Card>
      ))}
    </SimpleGrid>
  );
}
