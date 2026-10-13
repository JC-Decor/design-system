import { Avatar, Card, Group, Icon, Scroller, Text } from '@jcdecor/connect-ui';

const aniversariantes = [
  { nome: 'Mariana Souza', equipe: 'Comercial', data: '14/10' },
  { nome: 'Carlos Lima', equipe: 'Financeiro', data: '15/10' },
  { nome: 'Ana Ribeiro', equipe: 'RH', data: '17/10' },
  { nome: 'João Pereira', equipe: 'Logística', data: '18/10' },
  { nome: 'Beatriz Costa', equipe: 'Atendimento', data: '21/10' },
  { nome: 'Rafael Mendes', equipe: 'Tecnologia', data: '24/10' },
  { nome: 'Lúcia Almeida', equipe: 'Marketing', data: '27/10' },
  { nome: 'Pedro Santos', equipe: 'Operações', data: '30/10' },
];

export default function Demo() {
  return (
    <Scroller w="100%" scrollAmount={400} controlSize={40} edgeGradientColor="var(--ds-surface)">
      <Group wrap="nowrap" gap="md" py="xs">
        {aniversariantes.map((a) => (
          <Card key={a.nome} padding="md" w={180} ta="center" style={{ flexShrink: 0 }}>
            <Avatar name={a.nome} size="lg" mx="auto" />
            <Text fw={700} fz="sm" mt="sm">
              {a.nome}
            </Text>
            <Text fz="xs" c="var(--ds-text-3)">
              {a.equipe}
            </Text>
            <Group gap={4} justify="center" mt="xs" c="var(--cn-tone-coral-fg)">
              <Icon name="cake" size={14} />
              <Text fz="xs" fw={600}>
                {a.data}
              </Text>
            </Group>
          </Card>
        ))}
      </Group>
    </Scroller>
  );
}
