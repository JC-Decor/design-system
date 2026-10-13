import { Avatar, Badge, Card, Group, SimpleGrid, Text } from '@jcdecor/connect-ui';

function Colaborador({ destaque }: { destaque?: boolean }) {
  return (
    <Card
      // Styles API: estilos por parte do componente, usando os tokens do tema
      styles={destaque ? { root: { borderColor: 'var(--ds-primary)', background: 'var(--ds-primary-soft)' } } : undefined}
    >
      <Group gap="sm" wrap="nowrap">
        <Avatar name="Juliana Ferreira" color="lavender" />
        <div>
          <Text fw={700}>Juliana Ferreira</Text>
          <Text fz="sm" c="var(--ds-text-3)">Analista de RH · Equipe Pessoas</Text>
        </div>
      </Group>
      <Badge
        mt="md"
        color="green"
        styles={destaque ? { root: { boxShadow: 'var(--ds-focus-ring)' } } : undefined}
      >
        Ativo
      </Badge>
    </Card>
  );
}

export default function Demo() {
  return (
    <SimpleGrid cols={{ base: 1, sm: 2 }} w="100%">
      <Colaborador />
      <Colaborador destaque />
    </SimpleGrid>
  );
}
